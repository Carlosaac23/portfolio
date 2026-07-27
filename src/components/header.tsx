export default function Header() {
  return (
    <header id='header'>
      <div class='header__div'>
        <img
          class='header__img'
          fetchpriority='high'
          height={36}
          width={36}
          src='/static/profile.webp'
          alt='GitHub Profile Pic'
        />
      </div>
    </header>
  );
}
