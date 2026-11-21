import { useEffect, useState } from 'react';

import slider1 from '../images/slider-1.png';
import about from '../images/about-1.jpg';

import prodPfad from '../images/prod-pfad.jpg';
import prodFlakes from '../images/prod-flakes.jpg';
import prodGlycerine from '../images/prod-glycerine.jpg';
import soapNoodle from '../images/soap-noodle-78-8020.jpg';
import prodDrums from '../images/prod-drums.jpg';
import prodNoodles from '../images/prod-noodles.jpg';

import qcLab from '../images/savoil_india_qc_lab.jpg';
import global from '../images/global.jpg';
import plantation from '../images/plantation.jpg';
import warehouse from '../images/warehouse.jpg';

import cta from '../images/cta.jpg';
import soapImg from '../images/soap-img.jpg';
import swingSoap from '../images/swing-soap-noodle-9010-76.jpg';
import swsn from '../images/swsn-9010-78.jpg';
import galleryImg from '../images/gallery-img.jpg';


export const Home = () => {

  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  // Close lightbox with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    if (lightboxImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);


  return (
    <div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-media">
          <img
            src={slider1}
            alt="Oleochemical refinery towers illuminated at blue hour"
            width="1920"
            height="1088"
            fetchPriority="high"
          />
        </div>

        <div className="hero-inner">
          <div className="container-x">
            <div className="row">
              <div className="col-lg-9 col-xl-8">

                <span className="eyebrow" data-reveal>
                  Oleochemicals &middot; Fatty Acids &middot; Glycerine
                </span>

                <h1 data-reveal data-delay="90">
                  Refined ingredients for the world&rsquo;s industries.
                </h1>

                <p className="lead-text mt-4" data-reveal data-delay="180">
                  Savoil India sources, stores and supplies a complete range of
                  palm, palm kernel and coconut derived oleochemicals —
                  delivered in bulk, flexi bag and drum packing to manufacturers
                  across India and international markets.
                </p>

                <div
                  className="d-flex flex-column flex-sm-row gap-3 mt-4 pt-2 btn-inline-auto"
                  data-reveal
                  data-delay="260"
                >
                  <a href="/products.php" className="btn-x">
                    Explore Products <span className="arw">&rarr;</span>
                  </a>

                  <a href="/contact.php" className="btn-x btn-ghost-light">
                    Request a Quotation
                  </a>
                </div>

              </div>
            </div>

            <div className="hero-meta" data-reveal data-delay="340">
              <div className="row g-4">

                <div className="col-6 col-md-3">
                  <div>
                    <span>11 Product Grades</span>
                    <small>Complete portfolio</small>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div>
                    <span>Bulk &amp; Packed</span>
                    <small>Loose, flexi, drums</small>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div>
                    <span>Bathinda, Punjab</span>
                    <small>Warehouse &amp; office</small>
                  </div>
                </div>

                <div className="col-6 col-md-3">
                  <div>
                    <span>Global Supply</span>
                    <small>Domestic &amp; export</small>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* TRUST / STATS */}
      <section className="section-tight">
        <div className="container-x">

          <div className="row g-5 align-items-end">

            <div className="col-lg-6" data-reveal="left">
              <span className="eyebrow">Who we are</span>
              <h2>A dependable partner in the oleochemical supply chain.</h2>
            </div>

            <div className="col-lg-6" data-reveal="right">
              <p className="lead-text mb-0">
                We work with refiners, soap and detergent manufacturers, rubber
                processors, personal care formulators and traders — matching
                each requirement with the correct grade, packing and delivery
                schedule. Consistency, transparency and dependable logistics
                define every consignment we handle.
              </p>
            </div>

          </div>

          <hr className="rule my-5" />

          <div className="row stat-grid g-0">

            <div className="col-6 col-md-3 stat-item" data-reveal>
              <div className="num">
                <span data-count="11">0</span>
              </div>
              <div className="lbl">Product Grades</div>
            </div>

            <div
              className="col-6 col-md-3 stat-item"
              data-reveal
              data-delay="90"
            >
              <div className="num">
                <span data-count="4">0</span>
              </div>
              <div className="lbl">Product Categories</div>
            </div>

            <div
              className="col-6 col-md-3 stat-item"
              data-reveal
              data-delay="180"
            >
              <div className="num">
                <span data-count="3">0</span>
                <span className="suffix">+</span>
              </div>
              <div className="lbl">Packing Formats</div>
            </div>

            <div
              className="col-6 col-md-3 stat-item"
              data-reveal
              data-delay="270"
            >
              <div className="num">
                <span data-count="100">0</span>
                <span className="suffix">%</span>
              </div>
              <div className="lbl">Specification Led</div>
            </div>

          </div>
        </div>
      </section>


      {/* ABOUT SPLIT */}
      <section className="section bg-light">
        <div className="container-x">

          <div className="row g-5 g-lg-6 align-items-center">

            <div className="col-lg-6" data-reveal="left">
              <div className="media-frame ratio-portrait">
                <img
                  src={about}
                  alt="Stainless steel processing tanks inside a clean oleochemical facility"
                  loading="lazy"
                  width="1200"
                  height="1500"
                />
              </div>
            </div>

            <div className="col-lg-6 ps-lg-5" data-reveal="right">

              <span className="eyebrow">About Savoil India</span>

              <h2>Built around product knowledge, not just trade.</h2>

              <p className="lead-text mt-4">
                Savoil India operates from Bathinda, Punjab, with a dedicated
                warehouse and a corporate office supporting domestic
                distribution and export enquiries. Our portfolio is focused:
                oleochemical raw materials that manufacturers depend on every
                single day.
              </p>

              <ul className="check-list mt-4">
                <li>
                  Palm, palm kernel and coconut based fatty acid distillates
                </li>
                <li>High purity lauric, myristic and stearic acid grades</li>
                <li>Refined glycerine and soap noodle supply</li>
                <li>
                  Flexible packing — loose, flexi bag, drums and 25 kg bags
                </li>
              </ul>

              <div className="mt-4 pt-2 btn-inline-auto">
                <a href="/about.php" className="btn-x btn-outline-x">
                  Our Company <span className="arw">&rarr;</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* PRODUCT CATEGORIES */}
      <section className="section">
        <div className="container-x">

          <div className="row g-4 align-items-end mb-5">

            <div className="col-lg-7 section-head" data-reveal>
              <span className="eyebrow">Portfolio</span>
              <h2>Four categories. One consistent standard.</h2>
            </div>

            <div className="col-lg-5 text-lg-end" data-reveal data-delay="120">
              <a href="/products.php" className="link-arrow">
                View full catalogue <span className="arw">&rarr;</span>
              </a>
            </div>

          </div>

          <div className="row g-4">

            <div className="col-md-6 col-xl-3" data-reveal>
              <a className="cat-card" href="/products.php">

                <img
                  src={prodPfad}
                  alt="Amber fatty acid distillate in laboratory glassware"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <span className="cc-body">
                  <h3>Fatty Acid Distillates</h3>
                  <p>
                    PFAD, PKFAD and CFAD supplied loose, in flexi bags or drums.
                  </p>

                  <span
                    className="link-arrow"
                    style={{
                      color: "#fff",
                      borderColor: "rgba(255,255,255,.4)"
                    }}
                  >
                    Explore
                  </span>
                </span>

              </a>
            </div>

            <div className="col-md-6 col-xl-3" data-reveal data-delay="90">
              <a className="cat-card" href="/products.php#cat-fatty-acids">

                <img
                  src={prodFlakes}
                  alt="White fatty acid flakes in a glass dish"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <span className="cc-body">
                  <h3>Fatty Acids</h3>
                  <p>
                    Lauric, myristic and stearic acid grades in 25 kg bags and
                    flexi bags.
                  </p>

                  <span
                    className="link-arrow"
                    style={{
                      color: "#fff",
                      borderColor: "rgba(255,255,255,.4)"
                    }}
                  >
                    Explore
                  </span>
                </span>

              </a>
            </div>

            <div className="col-md-6 col-xl-3" data-reveal data-delay="180">
              <a className="cat-card" href="/products.php#cat-glycerine">

                <img
                  src={prodGlycerine}
                  alt="Clear refined glycerine in a laboratory flask"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <span className="cc-body">
                  <h3>Refined Glycerine</h3>
                  <p>USP grade refined glycerine supplied in flexi bags.</p>

                  <span
                    className="link-arrow"
                    style={{
                      color: "#fff",
                      borderColor: "rgba(255,255,255,.4)"
                    }}
                  >
                    Explore
                  </span>
                </span>

              </a>
            </div>

            <div className="col-md-6 col-xl-3" data-reveal data-delay="270">
              <a className="cat-card" href="/products.php#cat-soap-noodles">

                <img
                  src={soapNoodle}
                  alt="White soap noodles in a glass dish"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <span className="cc-body">
                  <h3>Soap Noodles</h3>
                  <p>TFM 78 (80:20) and TFM 72 (90:10) grades in 25 kg bags.</p>

                  <span
                    className="link-arrow"
                    style={{
                      color: "#fff",
                      borderColor: "rgba(255,255,255,.4)"
                    }}
                  >
                    Explore
                  </span>
                </span>

              </a>
            </div>

          </div>
        </div>
      </section>


      {/* PRODUCTS SHOWCASE */}
      <section className="section bg-light">
        <div className="container-x">

          <div className="row g-4 align-items-end mb-5">

            <div className="col-lg-7 section-head" data-reveal>
              <span className="eyebrow">Selected products</span>
              <h2>Grades our partners order most.</h2>
            </div>

            <div className="col-lg-5 text-lg-end" data-reveal data-delay="120">
              <a href="/products.php" className="btn-x btn-outline-x">
                View All Products <span className="arw">&rarr;</span>
              </a>
            </div>

          </div>

          <div className="row g-4">

            <div className="col-sm-6 col-xl-3" data-reveal>
              <article className="product-card">

                <div className="pc-media">
                  <img
                    src={prodPfad}
                    alt="Palm Fatty Acid Distillate sample"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                  <span className="pc-tag">Distillates</span>
                </div>

                <div className="pc-body">
                  <h3>Palm Fatty Acid Distillate</h3>
                  <div className="pc-short">PFAD</div>
                  <p>
                    A palm refining co-product widely used in soap, oleochemical
                    and industrial applications.
                  </p>

                  <div className="pc-foot">
                    <span className="pc-pack">
                      Loose &middot; Flexi &middot; Drums
                    </span>
                  </div>
                </div>

              </article>
            </div>

            <div className="col-sm-6 col-xl-3" data-reveal data-delay="90">
              <article className="product-card">

                <div className="pc-media">
                  <img
                    src={prodFlakes}
                    alt="Lauric acid C12 99% flakes"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                  <span className="pc-tag">Fatty Acids</span>
                </div>

                <div className="pc-body">
                  <h3>Lauric Acid C12 99% Flakes</h3>
                  <div className="pc-short">C1299</div>
                  <p>
                    High purity C12 flakes used across surfactant, personal care
                    and industrial formulations.
                  </p>

                  <div className="pc-foot">
                    <span className="pc-pack">25 kg bags</span>
                  </div>
                </div>

              </article>
            </div>

            <div className="col-sm-6 col-xl-3" data-reveal data-delay="180">
              <article className="product-card">

                <div className="pc-media">
                  <img
                    src={prodGlycerine}
                    alt="Refined glycerine USP grade"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                  <span className="pc-tag">Glycerine</span>
                </div>

                <div className="pc-body">
                  <h3>Refined Glycerine USP Grade</h3>
                  <div className="pc-short">RG</div>
                  <p>
                    USP grade refined glycerine for personal care,
                    pharmaceutical and industrial users.
                  </p>

                  <div className="pc-foot">
                    <span className="pc-pack">Flexi bags</span>
                  </div>
                </div>

              </article>
            </div>

            <div className="col-sm-6 col-xl-3" data-reveal data-delay="270">
              <article className="product-card">

                <div className="pc-media">
                  <img
                    src={soapNoodle}
                    alt="Soap noodles TFM 78"
                    loading="lazy"
                    width="1200"
                    height="900"
                  />
                  <span className="pc-tag">Soap Noodles</span>
                </div>

                <div className="pc-body">
                  <h3>Soap Noodles TFM 78 (80:20)</h3>
                  <div className="pc-short">TFM 78 8020</div>
                  <p>
                    Base noodles for toilet soap manufacturing, supplied in
                    standard 25 kg bags.
                  </p>

                  <div className="pc-foot">
                    <span className="pc-pack">25 kg bags</span>
                  </div>
                </div>

              </article>
            </div>

          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container-x">

          <div className="row g-5">

            <div className="col-lg-4" data-reveal="left">
              <span className="eyebrow">Why Savoil</span>
              <h2>Six reasons partners stay with us.</h2>

              <p className="lead-text mt-4">
                Sourcing oleochemicals &amp; fatty acids is a question of trust:
                correct grade, honest documentation and material that arrives
                when it was promised. That is the standard we hold ourselves to.
              </p>
            </div>

            <div className="col-lg-8">
              <div className="row g-4">

                <div className="col-md-6" data-reveal>
                  <div className="value-item">
                    <div className="vi-num">01</div>
                    <h3>Quality Products</h3>
                    <p>
                      Every grade is supplied against agreed specifications with
                      documentation on request.
                    </p>
                  </div>
                </div>

                <div className="col-md-6" data-reveal data-delay="80">
                  <div className="value-item">
                    <div className="vi-num">02</div>
                    <h3>Reliable Sourcing</h3>
                    <p>
                      Established supply relationships across palm, palm kernel
                      and coconut derivatives.
                    </p>
                  </div>
                </div>

                <div className="col-md-6" data-reveal data-delay="160">
                  <div className="value-item">
                    <div className="vi-num">03</div>
                    <h3>Flexible Packing</h3>
                    <p>
                      Loose bulk, flexi bags, drums and 25 kg bags to match your
                      handling systems.
                    </p>
                  </div>
                </div>

                <div className="col-md-6" data-reveal data-delay="240">
                  <div className="value-item">
                    <div className="vi-num">04</div>
                    <h3>Professional Distribution</h3>
                    <p>
                      Warehousing in Bathinda / Mundra with organised dispatch
                      and consignment tracking.
                    </p>
                  </div>
                </div>

                <div className="col-md-6" data-reveal data-delay="320">
                  <div className="value-item">
                    <div className="vi-num">05</div>
                    <h3>Customer Focus</h3>
                    <p>
                      Direct technical and commercial contact — no layers
                      between you and a decision.
                    </p>
                  </div>
                </div>

                <div className="col-md-6" data-reveal data-delay="400">
                  <div className="value-item">
                    <div className="vi-num">06</div>
                    <h3>International Outlook</h3>
                    <p>
                      Domestic distribution supported by export-ready
                      documentation and logistics.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* QUALITY / TECHNOLOGY */}
      <section className="section bg-ink">
        <div className="container-x">

          <div className="row g-5 align-items-center">

            <div className="col-lg-6 order-lg-2" data-reveal="right">
              <div className="media-frame ratio-wide">
                <img
                  src={qcLab}
                  alt="Laboratory technician assessing a sample of oleochemical liquid"
                  loading="lazy"
                  width="1400"
                  height="1000"
                />
              </div>
            </div>

            <div className="col-lg-6 pe-lg-5" data-reveal="left">
              <span className="eyebrow">Quality &amp; Process</span>
              <h2>Specification first, always.</h2>

              <p
                className="lead-text mt-4"
                style={{ color: "rgba(255,255,255,.7)" }}
              >
                Oleochemical performance is decided long before material reaches
                the production floor. We confirm grade, origin and packing at
                the point of sourcing, and we do not substitute specifications
                without your approval.
              </p>

              <div className="row g-4 mt-3">

                <div className="col-sm-6">
                  <h3 style={{ fontSize: "1rem" }}>Product Verification</h3>
                  <p style={{ color: "rgba(255,255,255,.6)", fontSize: ".93rem" }}>
                    Grades confirmed against documented specifications before
                    dispatch.
                  </p>
                </div>

                <div className="col-sm-6">
                  <h3 style={{ fontSize: "1rem" }}>Careful Handling</h3>
                  <p style={{ color: "rgba(255,255,255,.6)", fontSize: ".93rem" }}>
                    Storage and loading practices suited to each packing format.
                  </p>
                </div>

                <div className="col-sm-6">
                  <h3 style={{ fontSize: "1rem" }}>Traceable Supply</h3>
                  <p style={{ color: "rgba(255,255,255,.6)", fontSize: ".93rem" }}>
                    Clear paperwork from source through to delivery.
                  </p>
                </div>

                <div className="col-sm-6">
                  <h3 style={{ fontSize: "1rem" }}>Customer Assurance</h3>
                  <p style={{ color: "rgba(255,255,255,.6)", fontSize: ".93rem" }}>
                    Issues addressed directly, quickly and without escalation
                    chains.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* GLOBAL PRESENCE */}
      <section className="section">
        <div className="container-x">

          <div className="row g-5 align-items-center">

            <div className="col-lg-5" data-reveal="left">
              <span className="eyebrow">Reach</span>
              <h2>From plantation origin to your production line.</h2>

              <p className="lead-text mt-4">
                Our materials begin at palm, palm kernel and coconut origins and
                travel through refining, shipping and warehousing before they
                reach you. We manage that chain so your production schedule is
                never the variable.
              </p>

              <ul className="check-list mt-4">
                <li>Domestic distribution across Indian manufacturing hubs</li>
                <li>Export enquiries handled with complete documentation</li>
                <li>Bulk and containerised movement capability</li>
                <li>Long-term supply agreements and spot consignments</li>
              </ul>
            </div>

            <div className="col-lg-7" data-reveal="right">

              <div className="row g-4">

                <div className="col-12">
                  <div className="media-frame ratio-wide-2">
                    <img
                      src={global}
                      alt="Container port terminal at dusk representing international distribution"
                      loading="lazy"
                      width="1920"
                      height="1000"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="media-frame ratio-square">
                    <img
                      src={plantation}
                      alt="Aerial view of a palm plantation at sunrise"
                      loading="lazy"
                      width="1400"
                      height="900"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="media-frame ratio-square">
                    <img
                      src={warehouse}
                      alt="Warehouse with palletised bulk bags ready for dispatch"
                      loading="lazy"
                      width="1400"
                      height="900"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* FEATURED PRODUCTS */}
      <section className="section bg-light">
        <div className="container-x">

          <div className="section-head mb-5" data-reveal>
            <span className="eyebrow">Featured</span>
            <h2>Core grades in detail.</h2>
          </div>

          <div className="row g-4">

            <div className="col-md-4" data-reveal>
              <div className="feature-card">

                <img
                  src={prodFlakes}
                  alt="Triple pressed stearic acid flakes"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <span className="fc-body">
                  <span className="fc-cat">Fatty Acids</span>
                  <h3>Triple Pressed Stearic Acid</h3>
                  <p>
                    TPSA — supplied in 25 kg bags for candle, rubber, cosmetic
                    and industrial users.
                  </p>
                </span>

              </div>
            </div>

            <div className="col-md-4" data-reveal data-delay="110">
              <div className="feature-card">

                <img
                  src={prodDrums}
                  alt="Drums and bulk bags of oleochemical products"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <span className="fc-body">
                  <span className="fc-cat">Distillates</span>
                  <h3>Palm Kernel Fatty Acid Distillate</h3>
                  <p>
                    PKFAD — available loose, in flexi bags or drums, for soap
                    and oleochemical processing.
                  </p>
                </span>

              </div>
            </div>

            <div className="col-md-4" data-reveal data-delay="220">
              <div className="feature-card">

                <img
                  src={prodGlycerine}
                  alt="Refined glycerine USP grade sample"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <span className="fc-body">
                  <span className="fc-cat">Glycerine</span>
                  <h3>Refined Glycerine USP</h3>
                  <p>
                    RG — flexi bag supply for personal care, pharmaceutical and
                    industrial formulation.
                  </p>
                </span>

              </div>
            </div>

            <div className="col-md-4" data-reveal data-delay="220">
              <div className="feature-card">

                <img
                  src={prodFlakes}
                  alt="Lauric acid C12 flakes"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <span className="fc-body">
                  <span className="fc-cat">Fatty Acids</span>
                  <h3>Lauric Acid C12 99% Flakes USP</h3>
                  <p>
                    High purity C12 flakes for surfactant, personal care and
                    industrial formulations.
                  </p>
                </span>

              </div>
            </div>

            <div className="col-md-4" data-reveal data-delay="220">
              <div className="feature-card">

                <img
                  src={soapNoodle}
                  alt="Soap noodles TFM 78"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <span className="fc-body">
                  <span className="fc-cat">Soap Noodles</span>
                  <h3>Soap Noodles TFM 78</h3>
                  <p>
                    80:20 base noodles for toilet soap manufacturing, supplied
                    in 25 kg bags.
                  </p>
                </span>

              </div>
            </div>

            <div className="col-md-4" data-reveal data-delay="220">
              <div className="feature-card">

                <img
                  src={prodFlakes}
                  alt="Palm fatty acid distillate"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <span className="fc-body">
                  <span className="fc-cat">Distillates</span>
                  <h3>Palm Fatty Acid Distillate</h3>
                  <p>
                    Palm refining co-product used in soap, oleochemical and
                    industrial applications.
                  </p>
                </span>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* GALLERY PREVIEW */}
      <section className="section">
        <div className="container-x">

          <div className="row g-4 align-items-end mb-5">

            <div className="col-lg-7 section-head" data-reveal>
              <span className="eyebrow">Gallery</span>
              <h2>Inside our operations.</h2>
            </div>

            <div className="col-lg-5 text-lg-end" data-reveal data-delay="120">
              <a href="/gallery.php" className="link-arrow">
                View full gallery <span className="arw">&rarr;</span>
              </a>
            </div>

          </div>

          <div className="row g-3">

            <div className="col-6 col-lg-3" data-reveal>
              <button
                type="button"
                className="gal-item gal-wide d-block"
                onClick={() => openLightbox(soapNoodle)}
                aria-label="View Soap Noodle image"
              >
                <img
                  src={soapNoodle}
                  alt="Warehouse storage of packed oleochemicals"
                  loading="lazy"
                  width="1400"
                  height="900"
                />

                <span className="gal-cap">
                  <small>Soap Noodle</small>
                </span>
              </button>
            </div>

            <div className="col-6 col-lg-3" data-reveal data-delay="70">
              <button
                type="button"
                className="gal-item gal-wide d-block"
                onClick={() => openLightbox(slider1)}
                aria-label="View Facilities image"
              >
                <img
                  src={slider1}
                  alt="Processing tanks in an oleochemical facility"
                  loading="lazy"
                  width="1200"
                  height="1500"
                />

                <span className="gal-cap">
                  <small>Facilities</small>
                </span>
              </button>
            </div>

            <div className="col-6 col-lg-3" data-reveal data-delay="140">
              <button
                type="button"
                className="gal-item gal-wide d-block"
                onClick={() => openLightbox(soapImg)}
                aria-label="View Soap image"
              >
                <img
                  src={soapImg}
                  alt="Quality control laboratory testing"
                  loading="lazy"
                  width="1400"
                  height="1000"
                />

                <span className="gal-cap">
                  <span>Soap</span>
                </span>
              </button>
            </div>

            <div className="col-6 col-lg-3" data-reveal data-delay="210">
              <button
                type="button"
                className="gal-item gal-wide d-block"
                onClick={() => openLightbox(prodDrums)}
                aria-label="View Packing image"
              >
                <img
                  src={prodDrums}
                  alt="Drums and 25 kg bags packaging"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <span className="gal-cap">
                  <small>Packing</small>
                  <span>Drums &amp; bags</span>
                </span>
              </button>
            </div>

            <div className="col-6 col-lg-3" data-reveal>
              <button
                type="button"
                className="gal-item gal-wide d-block"
                onClick={() => openLightbox(prodNoodles)}
                aria-label="View Product Noodles image"
              >
                <img
                  src={prodNoodles}
                  alt="Palm plantation at sunrise"
                  loading="lazy"
                  width="1400"
                  height="900"
                />

                <span className="gal-cap" />
              </button>
            </div>

            <div className="col-6 col-lg-3" data-reveal data-delay="70">
              <button
                type="button"
                className="gal-item gal-wide d-block"
                onClick={() => openLightbox(swingSoap)}
                aria-label="View Soap Product image"
              >
                <img
                  src={swingSoap}
                  alt="Container port at dusk"
                  loading="lazy"
                  width="1920"
                  height="1000"
                />

                <span className="gal-cap" />
              </button>
            </div>

            <div className="col-6 col-lg-3" data-reveal data-delay="140">
              <button
                type="button"
                className="gal-item gal-wide d-block"
                onClick={() => openLightbox(swsn)}
                aria-label="View Soap Noodles image"
              >
                <img
                  src={swsn}
                  alt="Soap noodles product sample"
                  loading="lazy"
                  width="1200"
                  height="900"
                />

                <span className="gal-cap">
                  <small>Products</small>
                  <span>Soap noodles</span>
                </span>
              </button>
            </div>

            <div className="col-6 col-lg-3" data-reveal data-delay="210">
              <button
                type="button"
                className="gal-item gal-wide d-block"
                onClick={() => openLightbox(galleryImg)}
                aria-label="View Industrial Tanker image"
              >
                <img
                  src={galleryImg}
                  alt="Tanker loading at an industrial terminal"
                  loading="lazy"
                  width="1920"
                  height="800"
                />

                <span className="gal-cap" />
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="cta-band">

        <img
          src={cta}
          alt="Tanker and storage tanks at an industrial terminal at night"
          loading="lazy"
          width="1920"
          height="800"
        />

        <div className="cta-inner">
          <div className="container-x">

            <div className="row g-4 align-items-center">

              <div className="col-lg-7" data-reveal="left">
                <span className="eyebrow text-white">Partnership</span>

                <h2>Let&rsquo;s build a stronger partnership.</h2>

                <p className="lead-text mt-3 mb-0">
                  Share your grade, volume and packing requirement — our team
                  will respond with availability and a clear commercial
                  proposal.
                </p>
              </div>

              <div className="col-lg-5">
                <div
                  className="d-flex flex-column flex-sm-row gap-3 justify-content-lg-end btn-inline-auto"
                  data-reveal="right"
                >
                  <a href="/contact.php" className="btn-x btn-gold">
                    Contact Us
                  </a>

                  <a
                    href="/contact.php#enquiry"
                    className="btn-x btn-ghost-light"
                  >
                    Product Enquiry
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* CONTACT PREVIEW */}
      <section className="section">
        <div className="container-x">

          <div className="row g-5">

            <div className="col-lg-6" data-reveal="left">

              <span className="eyebrow">Contact</span>

              <h2>Connect with Savoil India.</h2>

              <p className="lead-text mt-4">
                Our team is here to assist you with product enquiries, business
                partnerships, orders, and logistics. Visit our office or connect
                with us for reliable support and seamless coordination.
              </p>

              <div className="mt-4 btn-inline-auto">
                <a href="/contact.php" className="btn-x btn-outline-x">
                  Full contact details
                  <span className="arw">&rarr;</span>
                </a>
              </div>

            </div>

            <div className="col-lg-6">
              <div className="row g-4">

                <div className="col-md-12 one-address" data-reveal>
                  <div className="info-card">

                    <span className="tag-pill mb-3 d-inline-block">
                      Address
                    </span>

                    <h3>Savoil India — Warehouse &amp; Office</h3>

                    <address>
                      K No 677, Joganand Road, Vill Gill Patti 15120, Bathinda{" "}
                      <br />
                      &ndash; Punjab, India
                    </address>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* REACT LIGHTBOX */}
      {lightboxImage && (
        <div
          id="lightbox"
          className="lightbox open"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeLightbox}
        >

          <button
            type="button"
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <img
            src={lightboxImage}
            alt="Gallery preview"
            onClick={(event) => event.stopPropagation()}
          />

        </div>
      )}

    </div>
  );
};

export default Home;

