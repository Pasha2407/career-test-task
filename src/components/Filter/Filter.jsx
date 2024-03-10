import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';

import { selectBrand } from '../../redux/filter/filterSelectors';
import { selectPrice } from '../../redux/filter/filterSelectors';
import { setValueFilter } from '../../redux/filter/filterSlice';

import { modelData, priceData } from 'data/dataConstants';

export const Filter = () => {
  const dispatch = useDispatch();

  const [isShownSelectBrand, setShownSelectBrand] = useState(false);
  const [isShownSelectPrice, setShownSelectPrice] = useState(false);

  const [selectedFromMileage, setSelectedFromMileage] = useState('');
  const [selectedToMileage, setSelectedToMileage] = useState('');

  const brandFilter = useSelector(selectBrand);
  const [selectedBrand, setSelectedBrand] = useState(
    brandFilter ? brandFilter : 'Enter the text'
  );

  const priceFilter = useSelector(selectPrice);
  const [selectedPrice, setSelectedPrice] = useState(
    priceFilter ? priceFilter : 'To $'
  );

  const handleShownSelectedBrand = event => {
    event.preventDefault();
    setShownSelectBrand(prev => !prev);
  };

  const handleShownSelectedPrice = event => {
    event.preventDefault();
    setShownSelectPrice(prev => !prev);
  };

  const changeBrand = brand => {
    setSelectedBrand(brand);
    setShownSelectBrand(false);
  };

  const changePrice = price => {
    setSelectedPrice(price + ' $');
    setShownSelectPrice(false);
  };

  const handleInputChangeFrom = event => {
    const { value } = event.target;
    setSelectedFromMileage(value.replace(/,/g, ''));
  };

  const handleInputChangeTo = event => {
    const { value } = event.target;
    setSelectedToMileage(value.replace(/,/g, ''));
  };

  const handleFilterSubmit = event => {
    event.preventDefault();
    if (
      selectedBrand === 'Enter the text' &&
      selectedPrice === 'To $' &&
      !selectedFromMileage &&
      !selectedToMileage
    ) {
      return;
    }
    const data = {
      brand: selectedBrand === 'Enter the text' ? '' : selectedBrand,
      price: selectedPrice === 'To $' ? '' : `$${parseInt(selectedPrice, 10)}`,
      mileageFrom: selectedFromMileage.trim(),
      mileageTo: selectedToMileage.trim(),
      onFilter: true,
    };
    dispatch(setValueFilter(data));
  };

  const handleFilterClear = event => {
    event.preventDefault();
    const data = {
      brand: '',
      price: '',
      mileageFrom: '',
      mileageTo: '',
      onFilter: false,
    };

    dispatch(setValueFilter(data));
    setSelectedBrand('Enter the text');
    setSelectedPrice('To $');
    setSelectedFromMileage('');
    setSelectedToMileage('');
  };

  return (
    <div className={css.Container}>
      <section>
        <header>Car brand</header>
        <div
          className={css.Select}
          style={{ width: '224px' }}
          onClick={handleShownSelectedBrand}
        >
          {selectedBrand}
          {isShownSelectBrand ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {isShownSelectBrand && (
          <div className={css.Options} style={{ width: '224px' }}>
            <ul>
              {modelData.map(item => (
                <li key={item} onClick={() => changeBrand(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <section>
        <header>Price/ 1 hour</header>
        <div style={{ position: 'relative' }}>
          <div
            className={css.Select}
            style={{ width: '125px' }}
            onClick={handleShownSelectedPrice}
          >
            {selectedPrice}
            {isShownSelectPrice ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          {isShownSelectPrice && (
            <div className={css.Options} style={{ width: '125px' }}>
              <ul>
                {priceData.map(item => (
                  <li key={item} onClick={() => changePrice(item)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <section>
        <header>Сar mileage / km</header>
        <div className={css.Input}>
          <div>
            <input
              className={css.InputFrom}
              type="text"
              onChange={handleInputChangeFrom}
              value={selectedFromMileage}
              id="mileageFrom"
            />
            <span htmlFor="mileageFrom">From</span>
          </div>
          <div>
            <input
              className={css.InputTo}
              type="text"
              onChange={handleInputChangeTo}
              value={selectedToMileage}
              id="mileageTo"
            />
            <span htmlFor="mileageTo">To</span>
          </div>
        </div>
      </section>
      <section className={css.Buttons}>
        <button onClick={handleFilterSubmit}>Search</button>
        <button onClick={handleFilterClear}>Reset</button>
      </section>
    </div>
  );
};
