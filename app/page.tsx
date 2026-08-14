"use client";
import React, { useEffect } from "react";
export default function Home() {
  const [scrolled, setScrolled] = React.useState(false);
  useEffect(() => {

  const handleScroll = () => {

    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

  };


  window.addEventListener(
    "scroll",
    handleScroll
  );


  return () => {
    window.removeEventListener(
      "scroll",
      handleScroll
    );
  };


}, []);
  return (
    <main>

      <section id="domov" className="hero">

       <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <div className="logo">
            Šachový klub
          </div>

     <div className="menu">
  <a href="#domov">Domov</a>
  <a href="#onas">O nás</a>
  <a href="#komunita">Komunita</a>
  <a href="#rodicia">Pre rodičov</a>
  <a href="#kontakt">Kontakt</a>
</div>
        </nav>


        <div className="hero-content">

          <p className="small-title">
            ŠACHOVÝ KLUB PRE DETI
          </p>

          <h1>
            Miesto, kde deti<br />
            objavujú svet šachu
          </h1>

          <p className="text">
            Rozvíjame logické myslenie, kreativitu
            a sebavedomie detí v príjemnej komunite.
          </p>

          <button>
            Objavte náš klub
          </button>

        </div>

      </section>
<section id="onas" className="about">

  <div className="about-text">

    <p className="section-label">
      O NAŠOM KLUBE
    </p>

    <h2>
      Viac než šach.
      <br />
      Miesto, kde deti objavujú svoj potenciál.
    </h2>

    <p>
      Malý Raj je šachový klub vytvorený pre deti,
      ktoré chcú objavovať svet šachu v príjemnom
      a podporujúcom prostredí.
    </p>

    <p>
      Veríme, že šach nie je iba o víťazstvách.
      Učí deti premýšľať, rozhodovať sa,
      byť trpezlivé a veriť svojim schopnostiam.
    </p>

  </div>
  <div className="about-values">

  <div>
    <span>♟</span>
    <p>Logické myslenie</p>
  </div>

  <div>
    <span>★</span>
    <p>Sebavedomie</p>
  </div>

  <div>
    <span>♡</span>
    <p>Komunita</p>
  </div>

</div>
</section>
<section id="komunita" className="community">

  <p className="section-label">
    NAŠA KOMUNITA
  </p>


  <h2>
    Miesto, kde deti
    <br />
    rastú spolu
  </h2>


  <p className="community-intro">
    Vytvárame prostredie, kde šach nie je iba hra,
    ale cesta k novým priateľstvám, sebavedomiu
    a radosti z objavovania.
  </p>


  <div className="cards">


    <div className="card">

      <div className="icon">
        ♟
      </div>

      <h3>
        Kreativita
      </h3>

      <p>
        Deti sa učia hľadať vlastné riešenia
        a premýšľať novým spôsobom.
      </p>

    </div>



    <div className="card">

      <div className="icon">
        ★
      </div>

      <h3>
        Sebavedomie
      </h3>

      <p>
        Každý malý úspech pomáha deťom veriť
        vo svoje schopnosti.
      </p>

    </div>



    <div className="card">

      <div className="icon">
        ♡
      </div>

      <h3>
        Priateľstvo
      </h3>

      <p>
        Budujeme komunitu detí, ktoré sa navzájom podporujú.
      </p>

    </div>


  </div>


</section>
<section className="photo-section">

  <img 
    src="/klub.jpg"
    alt="Deti v šachovom klube"
  />

  <div className="photo-overlay">
    <h2>
      Spoločne tvoríme
      šachovú komunitu
    </h2>
  </div>

</section>
<section id="rodicia" className="parents">


  <div className="parents-content">


    <p className="section-label">
      PRE RODIČOV
    </p>


    <h2>
      Šach ako investícia
      <br />
      do budúcnosti detí
    </h2>


    <p>
      Pomáhame deťom rozvíjať schopnosti,
      ktoré využijú nielen pri šachu,
      ale aj v škole a každodennom živote.
    </p>


    <div className="benefits">


      <div className="benefit">
        <span>01</span>
        <h3>Logické myslenie</h3>
        <p>
          Deti sa učia plánovať,
          analyzovať a robiť rozhodnutia.
        </p>
      </div>


      <div className="benefit">
        <span>02</span>
        <h3>Sústredenie</h3>
        <p>
          Šach podporuje trpezlivosť
          a schopnosť sústrediť sa.
        </p>
      </div>


      <div className="benefit">
        <span>03</span>
        <h3>Sebavedomie</h3>
        <p>
          Každý pokrok posilňuje
          vieru vo vlastné schopnosti.
        </p>
      </div>


    </div>


  </div>


</section>
<section id="kontakt" className="contact">


  <p className="section-label">
    KONTAKT
  </p>


  <h2>
    Staňte sa súčasťou
    <br />
    nášho šachového sveta
  </h2>


  <p className="contact-text">
    Máte otázky alebo chcete prihlásiť svoje dieťa?
    Ozvite sa nám. Radi vám odpovieme a predstavíme
    vám náš klub.
  </p>


  <div className="contact-info">


    <div>
      <h3>Email</h3>
      <p>
        info@malyraj.sk
      </p>
    </div>


    <div>
      <h3>Telefón</h3>
      <p>
        +421 XXX XXX XXX
      </p>
    </div>


    <div>
      <h3>Miesto</h3>
      <p>
        Malý Raj
        Bratislava
      </p>
    </div>


  </div>


  <button>
    Kontaktujte nás
  </button>


</section>
    </main>
  );
}
