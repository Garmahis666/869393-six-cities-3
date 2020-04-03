import React from 'react';
import PropTypes from 'prop-types';
import {Widths, Heights} from './../../consts/style';

const Sort = ({options, activeOption, opened, properties, onArrowClick, onOptionClick}) => {
  const css = `places__options places__options--custom` + (opened ? ` places__options--opened` : ``);
  if (properties.length <= 0) {
    return null;
  }

  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex="0" onClick={() => onArrowClick(opened)}>
      &nbsp;{activeOption}
      <svg className="places__sorting-arrow" width={Widths.SORT_ARROW} height={Heights.SORT_ARROW}>
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className={css}>
      {
        options.map((element) => <li key={element}
          className={`places__option` + (element === activeOption ? ` places__option--active` : ``)}
          tabIndex="0" onClick={() => onOptionClick(element, properties)}>{element}
        </li>)
      }
    </ul>
  </form>;
};
Sort.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeOption: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  properties: PropTypes.array.isRequired,
  onArrowClick: PropTypes.func.isRequired,
  onOptionClick: PropTypes.func.isRequired,
};
export default Sort;
