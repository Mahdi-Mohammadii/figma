import React from "react";
import NavigationBar from "./navigation";
import TopSection from "./topSection";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <NavigationBar
          menu={props.menu}
          changeDirectionHandler={props.changeDirectionHandler}
        />
        <TopSection />
      </header>
      <main>
        <section className="tools">
          <article>
            <h3 className="total">100+</h3>
            <h4>Total Tools</h4>
            <p>Lot of tools that offer free and premium features</p>
          </article>
          <article>
            <h3 className="free">50+</h3>
            <h4>Free Tools</h4>
            <p>Explore free tools that would help you achieve something</p>
          </article>
          <article>
            <h3 className="premium">40+</h3>
            <h4>Premium Tools</h4>
            <p>Need more feature? lets try the premium tools</p>
          </article>
        </section>
        <h2>Most Popular Tools</h2>
        <p>Most popular tools for designer and developer</p>
        <section className="popular-tools">
          <article className="main__card">
            <div className="image-card">
              <img src="/assets/image/Group_1498.svg" alt="InVision" />
            </div>
            <div className="description">
              <h4>InVision</h4>
              <h5>FREE</h5>
              <p>
                InVision is the digital product design platform used to make the
                world's best customer experiences.
              </p>
              <div className="tag">
                <p>Design</p>
                <p>Development</p>
              </div>
            </div>
          </article>
          <article className="main__card">
            <div className="image-card">
              <img src="/assets/image/Group_1498.svg" alt="InVision" />
            </div>
            <div className="description">
              <h4>InVision</h4>
              <h5>FREE</h5>
              <p>
                InVision is the digital product design platform used to make the
                world's best customer experiences.
              </p>
              <div className="tag">
                <p>Design</p>
                <p>Development</p>
              </div>
            </div>
          </article>
          <article className="main__card">
            <div className="image-card">
              <img src="/assets/image/Group_1498.svg" alt="InVision" />
            </div>
            <div className="description">
              <h4>InVision</h4>
              <h5>PREMIUM</h5>
              <p>
                InVision is the digital product design platform used to make the
                world's best customer experiences.
              </p>
              <div className="tag">
                <p>Design</p>
                <p>Development</p>
              </div>
            </div>
          </article>
        </section>
        <button className="section__button">See All</button>
        <h2>Most Popular Tools</h2>
        <p>Most popular tools for designer and developer</p>
        <section className="new-comer">
          <article className="main__card">
            <div className="image-card">
              <img src="/assets/image/Group_1498.svg" alt="InVision" />
            </div>
            <div className="description">
              <h4>InVision</h4>
              <h5>FREE</h5>
              <p>
                InVision is the digital product design platform used to make the
                world's best customer experiences.
              </p>
              <div className="tag">
                <p>Design</p>
                <p>Development</p>
              </div>
            </div>
          </article>
          <article class="main__card">
            <div class="image-card">
              <img src="/assets/image/Group_1498.svg" alt="InVision" />
            </div>
            <div class="description">
              <h4>InVision</h4>
              <h5>FREE</h5>
              <p>
                InVision is the digital product design platform used to make the
                world's best customer experiences.
              </p>
              <div class="tag">
                <p>Design</p>
                <p>Development</p>
              </div>
            </div>
          </article>
          <article class="main__card">
            <div class="image-card">
              <img src="/assets/image/Group_1498.svg" alt="InVision" />
            </div>
            <div class="description">
              <h4>InVision</h4>
              <h5>PREMIUM</h5>
              <p>
                InVision is the digital product design platform used to make the
                world's best customer experiences.
              </p>
              <div class="tag">
                <p>Design</p>
                <p>Development</p>
              </div>
            </div>
          </article>
          <article class="main__card">
            <div class="image-card">
              <img src="/assets/image/Group_1498.svg" alt="InVision" />
            </div>
            <div class="description">
              <h4>InVision</h4>
              <h5>PREMIUM</h5>
              <p>
                InVision is the digital product design platform used to make the
                world's best customer experiences.
              </p>
              <div class="tag">
                <p>Design</p>
                <p>Development</p>
              </div>
            </div>
          </article>
        </section>
        <button className="section__button">See All</button>
        <h2>Trusted Brands</h2>
        <p>Brand that using the tools</p>
        <section>
          <article class="brand__card">
            <div class="image-card">
              <img src="/assets/image/Group_1498.svg" alt="InVision" />
            </div>
            <div class="description">
              <h4>InVision</h4>
              <h5>PREMIUM</h5>
              <p>
                InVision is the digital product design platform used to make the
                world's best customer experiences.
              </p>
              <div class="tag">
                <p>Design</p>
                <p>Development</p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Header;
