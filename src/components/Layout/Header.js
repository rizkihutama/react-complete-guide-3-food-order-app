import classes from './Header.module.css';
import foodImage from '../../assets/food.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Fast Food App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={foodImage} alt='A table full of delicious food!' />
      </div>
    </>
  );
};

export default Header;