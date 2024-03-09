import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';

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

  const handleShownSelectedBrand = e => {
    e.preventDefault();
    setShownSelectBrand(prev => !prev);
  };

  const handleShownSelectedPrice = e => {
    e.preventDefault();
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

  const handleInputChangeFrom = e => {
    const { value } = e.target;
    setSelectedFromMileage(value.replace(/,/g, ''));
  };

  const handleInputChangeTo = e => {
    const { value } = e.target;
    setSelectedToMileage(value.replace(/,/g, ''));
  };

  const handleFilterSubmit = e => {
    e.preventDefault();
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

  const handleFilterClear = e => {
    e.preventDefault();
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
        <div style={{ position: 'relative' }}>
          <div className={css.Select} onClick={handleShownSelectedBrand}>
            {selectedBrand}
            {isShownSelectBrand ? <i>up</i> : <i>down</i>}
          </div>
          {isShownSelectBrand && (
            <div>
              <ul>
                {modelData.map(el => (
                  <li key={el} onClick={() => changeBrand(el)}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <section>
        <header>Price/ 1 hour</header>
        <div style={{ position: 'relative' }}>
          <div className={css.Select} onClick={handleShownSelectedPrice}>
            {selectedPrice}
            {isShownSelectPrice ? <i>up</i> : <i>down</i>}
          </div>
          {isShownSelectPrice && (
            <div>
              <ul>
                {priceData.map(el => (
                  <li key={el} onClick={() => changePrice(el)}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <section>
        <header>Сar mileage / km</header>
        <div style={{ display: 'flex' }}>
          <div>
            <div
              type="text"
              mask="9,999"
              title="Only number"
              onChange={handleInputChangeFrom}
              value={selectedFromMileage}
              id="mileageFrom"
            />
            <div htmlFor="mileageFrom">From</div>
          </div>
          <div>
            <div
              type="text"
              mask="9,999"
              title="Only number"
              onChange={handleInputChangeTo}
              value={selectedToMileage}
              id="mileageTo"
            />
            <div htmlFor="mileageTo">To</div>
          </div>
        </div>
      </section>
      <button onClick={handleFilterSubmit}>Search</button>
      <button onClick={handleFilterClear}>Reset</button>
    </div>
  );
};
