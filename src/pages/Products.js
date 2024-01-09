import './Products.css'
import React from 'react';

function Products() {


    return (
      <section className="products-section">
        {/* <img className="featured-product-img" src="https://i.imgur.com/xM9qKxk.jpg" alt="featured-roof" /> */}
        
        <section className='order-section'>
          <div  className='order-container'>
            <div className='order-card'>
              <img src="https://i.imgur.com/zTB5Ld9.png" alt="" className='services-icon'/>
              <h3>Free Consultation</h3>
              <p>Expert installations tailored to your needs. We use high-quality materials and ensure precision in every project to provide durable and beautiful roofs.</p>
            </div>
            <div className='order-card order'>
              <img src="https://i.imgur.com/Ve7l9P0.png" alt="" className='services-icon'/>
              <h3>Order</h3>
              <p>Expert Roofing Services Tailored to Your Needs</p>
            </div>
            <div className='order-card'>
              <img src="https://i.imgur.com/Wa42UeK.png" alt="" className='services-icon'/>
              <h3>Pick-up / Deliver</h3>
              <p>Comprehensive roof inspections to identify potential issues early. Our detailed assessments help maintain the integrity of your roof and prevent future problems.</p>
            </div>

          </div>
          <div class="same-day-pickup">
              <p class="animated-text">SAME DAY PICK-UP • CALL (123) 456-7890</p>
            </div>
       </section>

        <div className="product-container">

        
          
        <div className='product-card'>
            <div className='product-specs'>
              <img className='diameter' src="https://i.imgur.com/Yfbefkw.png" alt="diameter" />
              <h3 className='thickness'>Thickness Available:</h3>
              <p className='thickness'>0.5mm, 0.6mm, 0.7mm</p>
              <h3>Available colors</h3>
              <div className='color-container'>
                <div className='roof-color blue-roof'></div>
                <div className='roof-color red-roof'></div>
                <div className='roof-color green-roof'></div>
                <div className='roof-color beige-roof'></div>
                <div className='roof-color brown-roof'></div>
                <div className='roof-color white-roof'></div>
                <div className='roof-color terracotta-roof'></div>
                <div className='roof-color gray-roof'></div>
              </div>
            </div>

            <img className='product-img' src="https://i.imgur.com/LLkXY0A.png" alt="rib-roof-image" />
            <div>
              <h2>Multi-Rib</h2>  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam eius veniam dolorem libero! Odit, non consectetur. Reprehenderit quod recusandae, vel voluptates magni aperiam animi reiciendis corporis est unde libero, et assumenda officiis sit perspiciatis, fuga provident quis quasi iste harum? Totam non, earum dolor hic praesentium quod? Pariatur, dignissimos.</p>
            </div>            
          </div>
          
          <div className='product-card'>
            <div className='product-specs'>
              <img className='diameter' src="https://i.imgur.com/Yfbefkw.png" alt="diameter" />
              <h3 className='thickness'>Thickness Available:</h3>
              <p className='thickness'>0.5mm, 0.6mm, 0.7mm</p>
              <h3>Available colors</h3>
              <div className='color-container'>
                <div className='roof-color blue-roof'></div>
                <div className='roof-color red-roof'></div>
                <div className='roof-color green-roof'></div>
                <div className='roof-color beige-roof'></div>
                <div className='roof-color brown-roof'></div>
                <div className='roof-color white-roof'></div>
                <div className='roof-color terracotta-roof'></div>
                <div className='roof-color gray-roof'></div>
              </div>
            </div>
          <img className='product-img' src="https://i.imgur.com/U2hETcF.png" alt="rib-roof-image" />
          <div>
            <h2>Rib-type</h2>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam eius veniam dolorem libero! Odit, non consectetur. Reprehenderit quod recusandae, vel voluptates magni aperiam animi reiciendis corporis est unde libero, et assumenda officiis sit perspiciatis, fuga provident quis quasi iste harum? Totam non, earum dolor hic praesentium quod? Pariatur, dignissimos.</p>
          </div>            
        </div>


          <div className='product-card'>
          <div className='product-specs'>
              <img className='diameter' src="https://i.imgur.com/Yfbefkw.png" alt="diameter" />
              <h3 className='thickness'>Thickness Available:</h3>
              <p className='thickness'>0.5mm, 0.6mm, 0.7mm</p>
              <h3>Available colors</h3>
              <div className='color-container'>
                <div className='roof-color blue-roof'></div>
                <div className='roof-color red-roof'></div>
                <div className='roof-color green-roof'></div>
                <div className='roof-color beige-roof'></div>
                <div className='roof-color brown-roof'></div>
                <div className='roof-color white-roof'></div>
                <div className='roof-color terracotta-roof'></div>
                <div className='roof-color gray-roof'></div>
              </div>
            </div>
            <img className='product-img' src="https://i.imgur.com/XxM9Gbk.png" alt="rib-roof-image" />
            <div>
              <h2>Twin-Rib</h2>  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam eius veniam dolorem libero! Odit, non consectetur. Reprehenderit quod recusandae, vel voluptates magni aperiam animi reiciendis corporis est unde libero, et assumenda officiis sit perspiciatis, fuga provident quis quasi iste harum? Totam non, earum dolor hic praesentium quod? Pariatur, dignissimos.</p>
            </div>            
          </div>

          <div className='product-card'>
          <div className='product-specs'>
              <img className='diameter' src="https://i.imgur.com/Yfbefkw.png" alt="diameter" />
              <h3 className='thickness'>Thickness Available:</h3>
              <p className='thickness'>0.5mm, 0.6mm, 0.7mm</p>
              <h3>Available colors</h3>
              <div className='color-container'>
                <div className='roof-color blue-roof'></div>
                <div className='roof-color red-roof'></div>
                <div className='roof-color green-roof'></div>
                <div className='roof-color beige-roof'></div>
                <div className='roof-color brown-roof'></div>
                <div className='roof-color white-roof'></div>
                <div className='roof-color terracotta-roof'></div>
                <div className='roof-color gray-roof'></div>
              </div>
            </div>

            <img className='product-img' src="https://i.imgur.com/AqGwUvl.png" alt="rib-roof-image" />
            <div>
              <h2>Corrugated</h2>  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam eius veniam dolorem libero! Odit, non consectetur. Reprehenderit quod recusandae, vel voluptates magni aperiam animi reiciendis corporis est unde libero, et assumenda officiis sit perspiciatis, fuga provident quis quasi iste harum? Totam non, earum dolor hic praesentium quod? Pariatur, dignissimos.</p>
            </div>            
          </div>

          <div className='product-card'>
          <div className='product-specs'>
              <img className='diameter' src="https://i.imgur.com/Yfbefkw.png" alt="diameter" />
              <h3 className='thickness'>Thickness Available:</h3>
              <p className='thickness'>0.5mm, 0.6mm, 0.7mm</p>
              <h3>Available colors</h3>
              <div className='color-container'>
                <div className='roof-color blue-roof'></div>
                <div className='roof-color red-roof'></div>
                <div className='roof-color green-roof'></div>
                <div className='roof-color beige-roof'></div>
                <div className='roof-color brown-roof'></div>
                <div className='roof-color white-roof'></div>
                <div className='roof-color terracotta-roof'></div>
                <div className='roof-color gray-roof'></div>
              </div>
            </div>

            <img className='product-img' src="https://i.imgur.com/96wPGrW.png" alt="rib-roof-image" />
            <div>
              <h2>Tile-Span</h2>  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam eius veniam dolorem libero! Odit, non consectetur. Reprehenderit quod recusandae, vel voluptates magni aperiam animi reiciendis corporis est unde libero, et assumenda officiis sit perspiciatis, fuga provident quis quasi iste harum? Totam non, earum dolor hic praesentium quod? Pariatur, dignissimos.</p>
            </div>            
          </div>


          <div className='product-card'>
          <div className='product-specs'>
              <img className='diameter' src="https://i.imgur.com/Yfbefkw.png" alt="diameter" />
              <h3 className='thickness'>Thickness Available:</h3>
              <p className='thickness'>0.5mm, 0.6mm, 0.7mm</p>
              <h3>Available colors</h3>
              <div className='color-container'>
                <div className='roof-color blue-roof'></div>
                <div className='roof-color red-roof'></div>
                <div className='roof-color green-roof'></div>
                <div className='roof-color beige-roof'></div>
                <div className='roof-color brown-roof'></div>
                <div className='roof-color white-roof'></div>
                <div className='roof-color terracotta-roof'></div>
                <div className='roof-color gray-roof'></div>
              </div>
            </div>

            <img className='product-img' src="https://i.imgur.com/2riqGKc.png" alt="rib-roof-image" />
            <div>
              <h2>Tile-Span: Roman Style</h2>  
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam eius veniam dolorem libero! Odit, non consectetur. Reprehenderit quod recusandae, vel voluptates magni aperiam animi reiciendis corporis est unde libero, et assumenda officiis sit perspiciatis, fuga provident quis quasi iste harum? Totam non, earum dolor hic praesentium quod? Pariatur, dignissimos.</p>
            </div>            
          </div>
        </div>

        <div className='product-card ease'>
            <img className='product-img' src="https://i.imgur.com/NjXGsbk.png" alt="rib-roof-image" />
            <div>
              <h2 className='decking-title'>Decking</h2>  
              <p className='decking-description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam eius veniam dolorem libero! Odit, non consectetur. Reprehenderit quod recusandae, vel voluptates magni aperiam animi reiciendis corporis est unde libero, et assumenda officiis sit perspiciatis, fuga provident quis quasi iste harum? Totam non, earum dolor hic praesentium quod? Pariatur, dignissimos.</p>
              <h2>Thickness Available:</h2>
              <p>0.5mm, 0.6mm, 0.7mm</p>
            </div>            
        </div>

        <div className='product-card clad'>
          <div className='clad-description-container'>
            <h2 className='clad-title'>Clad</h2>  
            <p className='clad-description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam eius veniam dolorem libero! Odit, non consectetur. Reprehenderit quod recusandae, vel voluptates magni aperiam animi reiciendis corporis est unde libero, et assumenda officiis sit perspiciatis, fuga provident quis quasi iste harum? Totam non, earum dolor hic praesentium quod? Pariatur, dignissimos.</p>
            <h2>Thickness Available:</h2>
            <p>0.4mm, 0.5mm, 0.6mm</p>
             <h3>Available colors</h3>
              <div className='color-container'>
                <div className='roof-color blue-roof'></div>
                <div className='roof-color red-roof'></div>
                <div className='roof-color green-roof'></div>
                <div className='roof-color beige-roof'></div>
                <div className='roof-color brown-roof'></div>
                <div className='roof-color white-roof'></div>
                <div className='roof-color terracotta-roof'></div>
                <div className='roof-color gray-roof'></div>
              </div>
          </div>
          <div className='clad-img-container'>
            <img className='product-img clad-img' src="https://i.imgur.com/oNAR9sq.png" alt="rib-roof-image" />
          </div>        
        </div>

          <div className='product-card'>
            <img className='product-img' src="https://i.imgur.com/72EIQu3.png" alt="rib-roof-image" />
            <div>
              <h2 className='clad-title'>Spandrel</h2>  
              <p className='clad-description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nam eius veniam dolorem libero! Odit, non consectetur. Reprehenderit quod recusandae, vel voluptates magni aperiam animi reiciendis corporis est unde libero, et assumenda officiis sit perspiciatis, fuga provident quis quasi iste harum? Totam non, earum dolor hic praesentium quod? Pariatur, dignissimos.</p>
              <h2>Thickness Available:</h2>
              <p>0.35mm, 0.4mm, 0.5mm</p>
            <div>
              <h3>Available colors</h3>
              <div className='color-container'>
                <div className='roof-color beige-roof'></div><div className='roof-color brown-roof'></div> <div className='roof-color white-roof'></div>
              </div>
            </div>
            </div>            
        </div>
        <img className='order-now' src="https://i.imgur.com/ZHifNxM.png" alt="order now" />
      </section>
    );
  }
  




  
  export default Products;