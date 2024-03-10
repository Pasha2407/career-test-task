import css from './Modal.module.css';
import { IconContext } from 'react-icons';
import { IoMdClose } from 'react-icons/io';

export const Modal = ({ closeModal, data }) => {
  return (
    <div className={css.Wrapper}>
      <div className={css.Container}>
        <section className={css.Exit}>
          <button onClick={closeModal}>
            <IconContext.Provider value={{ size: 22 }}>
              <IoMdClose />
            </IconContext.Provider>
          </button>
        </section>
        <section className={css.Image}>
          <div style={{ backgroundImage: `url(${data.img})` }}></div>
        </section>
        <section className={css.Title}>
          <p>
            {data.make}
            <span style={{ color: '#3470FF' }}> {data.model}</span>, {data.year}
          </p>
        </section>
        <section className={css.Description}>Description</section>
      </div>
    </div>
  );
};
