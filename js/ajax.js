const PRODUCTOSJSON = "/result.json"

$(document).ready(function() {

      $(".form").append(`<div class="login-form">
      <a href="javascript:void(0);" class="form-cancel">
          <i class="fas fa-times"></i>
      </a>
      <strong>Ingresá Aqui</strong>
      <form>
          <input type="email" name="email" placeholder="Ejemplo@gmail.com" required/>
          <input type="password" name="password" placeholder="Contraseña" required/>
          <input type="submit" value="Ingresá"/>
      </form>
      <div class="form-btns">
          <a href="#" class="forget">¿Olvidate tu contraseña?</a>
          <a href="javascript:void(0);" class="sign-up-btn">Creá tu cuenta</a>
      </div>
  </div>
  <div class="sign-up-form">
      <a href="javascript:void(0);" class="form-cancel">
          <i class="fas fa-times"></i>
      </a>
          <strong>Registrate</strong>
          <form>
              <input type="text" name="fullname" placeholder="Nombre Completo" required/>
              <input type="email" name="email" placeholder="Ejemplo@gmail.com" required/>
              <input type="password" name="password" placeholder="Contraseña" required/>
              <input type="submit" value="Registrate"/>
          </form>
          <div class="form-btns">
              <a href="javascript:void(0);" class="already-account">
                  ¿Ya tienes una cuenta?</a>
          </div>
  </div>`);

      $("#adaptive").append(`<li class="item-a">
      <div class="full-slider-box f-slide-1">
          <div class="f-slider-text-container">
          <div class="f-slider-text">
              <span>Registrate</span>
              <strong>Y Obtené<br/> Muchos <font>Beneficios</font></strong>
              <a href="#" class="f-slider-btn">Registrarse</a>
          </div>
          </div>
      </div>
      </li>
          <li class="item-b">
      <div class="full-slider-box f-slide-2">    
          <div class="f-slider-text-container">
          <div class="f-slider-text">
              <span>Últimas Horas</span>
              <strong>30% Off<br/> con el código <font>ELSIE</font></strong>
              <a href="#" class="f-slider-btn">Comprar</a>
          </div>
          </div>
      </div>
      </li>
          <li class="item-c">
          <div class="full-slider-box f-slide-3">    
          <div class="f-slider-text-container">
          <div class="f-slider-text">
              <span>Comprá lo que Quieras</span>
              <strong>Envíos Gratis<br/> a <font>Todo el País</font></strong>
              <a href="#" class="f-slider-btn">Comprar</a>
          </div>
          </div>
      </div>
      </li>`);


        $("#autoWidth").append(`<li class="item">
        <div class="feature-box">
            <a href="#">
                <img src="img/feature_1.jpg">
            </a>
        </div>
        <span>Remeras Hombre</span>
    </li>
    <li class="item">
        <div class="feature-box">
            <a href="#">
                <img src="img/feature_2.jpg">
            </a>
        </div>
        <span>Remeras Mujer</span>
    </li>
    <li class="item">
        <div class="feature-box">
            <a href="#">
                <img src="img/feature_3.jpg">
            </a>
        </div>
        <span>Remeras Niños</span>
    </li>
    <li class="item">
        <div class="feature-box">
            <a href="#">
                <img src="img/feature_4.jpg">
            </a>
        </div>
        <span>Almohadones</span>
    </li>
    <li class="item">
        <div class="feature-box">
            <a href="#">
                <img src="img/feature_5.jpg">
            </a>
        </div>
        <span>Fundas</span>
    </li>
    <li class="item">
        <div class="feature-box">
            <a href="#">
                <img src="img/feature_6.jpg">
            </a>
        </div>
        <span>Carteras</span>
    </li>`);

    $.getJSON(PRODUCTOSJSON,
        function (data) {
            let galeria = data
            $.each(galeria, function (index, item) { 
                $(".product-container").append(`
                <div class="product-box">
<div class="product-img">
    <a class="add-cart">
        <i class="fas fa-shopping-cart"></i>
    </a>
<img src="img/p-${item.id}.png">
</div>
<div class="product-details">
    <a href="#" class="p-name">${item.name}</a>
    <span class="p-price">$${item.price}.00</span>
</div>
</div>
                `);
            });
        }
    );  
});