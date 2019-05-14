import { Placement } from 'popper.js';
import React, { AllHTMLAttributes } from 'react';
import { Manager, Reference } from 'react-popper';
import scrollIntoView from 'scroll-into-view-if-needed';

import { uniqueId } from '../../utils';
import { DropdownIcon } from '../Icons';
import { Input } from '../Input';
import { ListItem } from '../List/Item/Item';
import { List } from '../List/List';

import { StyledStatusMessage } from './styled';

interface SelectState {
  filterChildren: boolean;
  highlightedId: string | null;
  inputText: string;
  isOpen: boolean;
}

interface Props {
  label?: React.ReactChild;
  maxHeight?: number;
  placement?: Placement;
  value: AllHTMLAttributes<HTMLElement>['value'];
  onItemChange(value: AllHTMLAttributes<HTMLElement>['value']): any;
}

type SelectProps = Props & React.HTMLAttributes<HTMLUListElement>;

export class Select extends React.PureComponent<SelectProps, SelectState> {
  static Option = ListItem;

  static defaultProps: Partial<Props> = {
    placement: 'bottom-start',
  };

  state = {
    filterChildren: false,
    highlightedId: null,
    inputText: '',
    isOpen: false,
  };

  private inputRef: HTMLInputElement | null = null;
  private listRef: HTMLUListElement | null = null;

  private readonly uniqueInputId = uniqueId('input_');
  private readonly uniqueLabelId = uniqueId('label_');
  private readonly uniqueSelectId = uniqueId('select_');

  componentDidMount() {
    const { children, value } = this.props;

    if (!value) {
      return;
    }

    React.Children.forEach(children as ListItem[], child => {
      if (React.isValidElement(child) && child.type === ListItem) {
        if (child.props.value === this.props.value) {
          return (
            child.props.children &&
            typeof child.props.children === 'string' &&
            this.updateInputText(child.props.children)
          );
        }
      }
    });
  }

  render() {
    const { children, label, maxHeight, onItemChange, placeholder, placement, value, ...rest } = this.props;

    const labelId = this.getLabelId();
    const selectId = this.getSelectId();

    const ariaOwns = this.state.isOpen ? { 'aria-owns': selectId } : {};
    const ariaLabelledBy = label ? { 'aria-labelledby': labelId } : {};

    return (
      <Manager>
        <div role="combobox" aria-expanded={this.state.isOpen} aria-haspopup="listbox" {...ariaOwns}>
          {this.renderLabel()}
          {this.renderInput()}
          <List
            handleListRef={this.handleListRef}
            id={selectId}
            isOpen={this.state.isOpen}
            maxHeight={maxHeight}
            placement={placement}
            role={'listbox'}
            {...ariaLabelledBy}
            {...rest}
          >
            {this.renderFilteredChildren()}
          </List>
        </div>
        <StyledStatusMessage
          id={`a11y-status-message-${selectId}`}
          role="status"
          aria-live="polite"
          aria-relevant="additions text"
        />
      </Manager>
    );
  }

  private renderLabel() {
    const { label } = this.props;

    const inputId = this.getInputId();
    const labelId = this.getLabelId();

    if (typeof label === 'string') {
      return (
        <Input.Label htmlFor={inputId} id={labelId}>
          {label}
        </Input.Label>
      );
    }

    if (React.isValidElement(label) && label.type === Input.Label) {
      return React.cloneElement<React.LabelHTMLAttributes<HTMLLabelElement>>(label, {
        htmlFor: inputId,
        id: labelId,
      });
    }

    return null;
  }

  private renderInput() {
    const { label, placeholder } = this.props;

    const highlightedItem = this.getItemById(this.state.highlightedId);
    const ariaActiveDescendant = highlightedItem ? { 'aria-activedescendant': highlightedItem.id } : {};
    const ariaControls = this.state.isOpen ? { 'aria-controls': this.getSelectId() } : {};
    const ariaLabelledBy = label ? { 'aria-labelledby': this.getLabelId() } : {};

    return (
      <Reference innerRef={node => (this.inputRef = node as HTMLInputElement)}>
        {({ ref }) => (
          <Input
            iconRight={
              <DropdownIcon
                aria-haspopup={true}
                aria-label="toggle menu" // Will need to translate this label in the future
                onClick={this.toggleList}
                role="button"
                tabIndex={-1}
                style={{ outline: 'none' }}
              />
            }
            aria-autocomplete="list"
            id={this.getInputId()}
            onChange={this.handleOnInputChange}
            onKeyDown={this.handleOnInputKeyDown}
            onFocus={this.handleOnInputFocus}
            placeholder={placeholder}
            ref={ref}
            value={this.state.inputText}
            {...ariaActiveDescendant}
            {...ariaControls}
            {...ariaLabelledBy}
          />
        )}
      </Reference>
    );
  }

  private renderFilteredChildren() {
    const { children } = this.props;

    return React.Children.map(children as ListItem[], (child, index) => {
      if (React.isValidElement(child) && child.type === ListItem && typeof child.props.children === 'string') {
        if (
          !this.state.filterChildren ||
          child.props.children.toLowerCase().startsWith(this.state.inputText.toLocaleLowerCase())
        ) {
          const id = `${this.getSelectId()}-item-${index}`;

          return React.cloneElement<React.LiHTMLAttributes<HTMLLIElement>>(child, {
            'aria-selected': child.props.value === this.props.value,
            // @ts-ignore
            'data-highlighted': id === this.state.highlightedId,
            id,
            onClick: this.handleOnItemClick,
            onMouseOver: this.handleOnItemMouseOver,
            role: 'option',
          });
        }

        return null;
      }
    });
  }

  private toggleList = () => {
    this.state.isOpen ? this.closeList() : this.openList();
  };

  private openList() {
    const { value } = this.props;

    this.setState({ isOpen: true }, () => {
      document.addEventListener('mousedown', this.handleOnClickOutside, false);

      const item = value && this.findItemByValue(value);

      if (item) {
        this.updateHighlightedId(item.id);
      }

      return this.inputRef && this.inputRef.focus();
    });
  }

  private closeList() {
    this.setState({ filterChildren: false, highlightedId: null, isOpen: false }, () => {
      document.removeEventListener('mousedown', this.handleOnClickOutside, false);

      if (this.props.value) {
        const selectListItem = this.findChildrenByValue(this.props.value);
        const text =
          selectListItem && typeof selectListItem.props.children === 'string' && selectListItem.props.children;

        if (text) {
          this.setState({ inputText: text });
        }
      } else {
        this.setState({ inputText: '' });
      }
    });
  }

  private getInputId() {
    return this.uniqueInputId;
  }

  private getLabelId() {
    return this.uniqueLabelId;
  }

  private getSelectId() {
    const { id } = this.props;

    return id || this.uniqueSelectId;
  }

  private findIdByItem(item: HTMLLIElement) {
    const children = this.listRef && Array.from(this.listRef.children);

    return children && children[children.indexOf(item)].id;
  }

  private findItemByValue(value: AllHTMLAttributes<HTMLElement>['value']) {
    const children = this.listRef && Array.from(this.listRef.children);

    return (
      children &&
      children.find(child => {
        return child.getAttribute('value') === value;
      })
    );
  }

  private findChildrenByValue(value: AllHTMLAttributes<HTMLElement>['value']) {
    const children = React.Children.toArray(this.props.children) as ListItem[];

    return children.find(child => {
      return child.props.value === value;
    });
  }

  private getItemById(id: string | null) {
    if (!this.listRef || !id) {
      return null;
    }

    const children = Array.from(this.listRef.children) as HTMLLIElement[];

    return children.find(child => {
      return child.id === id;
    });
  }

  private updateInputText(inputText: string) {
    this.setState({ inputText });
  }

  private handleListRef = (node: HTMLElement | null) => {
    this.listRef = node as HTMLUListElement;
  };

  private handleOnClickOutside = (event: MouseEvent) => {
    if (!this.listRef) {
      return;
    }

    if (
      (this.listRef && this.listRef.contains(event.target as Node)) ||
      (this.inputRef && this.inputRef.parentElement && this.inputRef.parentElement.contains(event.target as Node))
    ) {
      return;
    }

    if (this.state.isOpen) {
      this.toggleList();
    }
  };

  private handleOnItemClick = () => {
    const { onItemChange } = this.props;

    const highlightedItem = this.getItemById(this.state.highlightedId);
    if (highlightedItem && highlightedItem.textContent) {
      this.updateInputText(highlightedItem.textContent);

      const value = highlightedItem.getAttribute('value');

      if (onItemChange && value) {
        onItemChange(value);
      }
    }

    if (this.inputRef) {
      this.inputRef.focus();
    }

    if (this.state.isOpen) {
      this.toggleList();
    }
  };

  private handleOnItemMouseOver = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const item = event.currentTarget;

    const id = this.findIdByItem(item);

    if (typeof id === 'string') {
      this.setState({ highlightedId: id });
    }
  };

  private handleOnInputFocus = () => {
    if (!this.props.value && !this.state.isOpen) {
      this.toggleList();
    }
  };

  private handleOnInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!this.state.isOpen) {
      this.toggleList();
    }

    this.setState({ filterChildren: true, inputText: event.target.value }, () => {
      if (!this.listRef) {
        return;
      }

      const length = this.listRef.children.length;
      const status = document.getElementById(`a11y-status-message-${this.getSelectId()}`);

      if (!status) {
        return;
      }

      status.innerHTML = '';
      const node = document.createElement('div');
      let text;

      /**
       * The following text is used for VO.
       * Need to think about way to translate this text in the future. There are no tools to translate atm.
       * Might become an optional prop that can change the text.
       */

      switch (length) {
        case 0: {
          text = document.createTextNode('0 results are available.');
          break;
        }
        case 1: {
          text = document.createTextNode(
            '1 result is available, use up and down arrow keys to navigate. Press Enter key to select.',
          );
          break;
        }
        default: {
          text = document.createTextNode(
            `${length} results are available, use up and down arrow keys to navigate. Press Enter key to select.`,
          );
        }
      }

      node.appendChild(text);
      status.appendChild(node);
    });
  };

  /**
   * Accessibility Listbox Keyboard Support
   * Learn more: https://www.w3.org/TR/wai-aria-practices/#Listbox
   */

  private handleOnInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!this.listRef) {
      return;
    }

    const firstChild = this.listRef.firstChild as HTMLElement;
    const lastChild = this.listRef.lastChild as HTMLElement;

    switch (event.key) {
      case 'Enter':
      case ' ': {
        event.preventDefault();
        this.handleOnItemClick();
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        this.updateHighlightedId(this.nextItemId(-1));

        break;
      }

      case 'ArrowDown': {
        event.preventDefault();
        this.updateHighlightedId(this.nextItemId(1));

        break;
      }
      case 'Home': {
        event.preventDefault();

        if (!firstChild) {
          return;
        }

        this.updateHighlightedId(firstChild.id);

        break;
      }
      case 'End': {
        event.preventDefault();

        if (!lastChild) {
          return;
        }

        this.updateHighlightedId(lastChild.id);

        break;
      }
      case 'Tab':
      case 'Esc':
      case 'Escape': {
        if (this.state.isOpen) {
          this.toggleList();
        }
        break;
      }
    }
  };

  private nextItemId(direction: 1 | -1) {
    if (!this.listRef || !this.listRef.firstChild || !this.listRef.lastChild) {
      return null;
    }

    const { highlightedId } = this.state;
    const element = this.getItemById(highlightedId);

    const firstChild = this.listRef.firstChild as HTMLElement;
    const lastChild = this.listRef.lastChild as HTMLElement;

    if (!element) {
      if (direction > 0) {
        return firstChild.id;
      } else {
        return lastChild.id;
      }
    }

    if (direction > 0) {
      if (element.nextSibling) {
        const nextSibling = element.nextSibling as HTMLElement;

        return nextSibling.id;
      } else {
        return firstChild.id;
      }
    } else if (direction < 0) {
      if (element.previousSibling) {
        const previousSibling = element.previousSibling as HTMLElement;

        return previousSibling.id;
      } else {
        return lastChild.id;
      }
    }

    return null;
  }

  private updateHighlightedId(id: string | null) {
    if (!id) {
      return;
    }

    this.setState(
      {
        highlightedId: id,
      },
      () => {
        this.scrollIntoView();
      },
    );
  }

  private scrollIntoView() {
    const element = this.getItemById(this.state.highlightedId);

    if (!element) {
      return;
    }

    return scrollIntoView(element, {
      behavior: 'smooth',
      scrollMode: 'if-needed',
    });
  }
}