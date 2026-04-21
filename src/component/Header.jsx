import imgHeader from "/images/globe.png";

  export default function Header() {
  return (
      <header>
          <img src={imgHeader} alt="globe icon" />
          <h1>my travel journal.</h1>
      </header>
  )
}
