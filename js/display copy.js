 function creatDrinks() {
     //   eats.innerHTML = '';
     eats.style.display = "none";
     drinks.style.display = "block";

     return drinks.innerHTML = `<section class="container order-options-drink">    
    <div class="order_options buttons">
        <div class="order_options-inner">
            <input class="sort_style" data-caption="Эспрессо" type="radio" id="espresso" name="coffee_opt" />
            <label for="espresso">Эспрессо</label>

            <input class="sort_style" data-caption="Американо" type="radio" id="americano" name="coffee_opt" />
            <label for="americano">Американо</label>

            <input class="sort_style" data-caption="Капуччино" type="radio" id="capuccino" name="coffee_opt" />
            <label for="capuccino">Капуччино</label>

            <input class="sort_style" data-caption="Латте" type="radio" id="au_lait" name="coffee_opt" />
            <label for="au_lait">Латте</label>

            <input class="sort_style" data-caption="Маккиато" type="radio" id="macchiato" name="coffee_opt" />
            <label for="macchiato">Маккиато</label>

            <input class="sort_style" data-caption="Моккачино" type="radio" id="mokachino" name="coffee_opt" />
            <label for="mokachino">Моккачино</label>
            <input class="sort_style" data-caption="Мокко" type="radio" id="mocha" name="coffee_opt" />
            <label for="mocha">Мокко </label>
        </div>
    </div>
    <div>
        <div class="order_display">
            <h1 class="coffee_name">Choose your coffee</h1>
            <div class="block_cup">
                <div class="cup">
                    <div class="filling reset">
                        <div class="coffee">Эспрессо</div>
                        <div class="coffexp">Эспрессо</div>
                        <div class="water">Вода</div>
                        <div class="liquor">Liquor</div>
                        <div class="milk">Молоко</div>
                        <div class="whipped_cream">Взбитые сливки</div>
                        <div class="milk_foam">Взбитая молочная пена</div>
                        <div class="steamed_milk">Горячее молоко</div>
                        <div class="chocolate">Шоколад</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="order_count">
            <h3 class="caption">Количество</h3>
            <div class="order_count-inner">
                <input type="button" value="-" class="sugctrl" id="removeCount" />
                <input type="text" value="1" class="countcup" id="countCup" name="cupcount_1" />
                <input type="button" value="+" class="sugctrl" id="addCount" />
            </div>
        </div>
    </div>

    <div>
        <div class="order_size">
            <h3 class="caption">Размер порции</h3>
            <div class="order_size-inner">
                <input type="radio" id="ml450" data-caption="450" name="coffee_size" class="style-size" />
                <label for="ml450">450мл</label>
                <input type="radio" id="ml350" name="coffee_size" data-caption="350" class="style-size" />
                <label for="ml350">350мл</label>
                <input type="radio" id="ml250" name="coffee_size" data-caption="250" class="style-size" />
                <label for="ml250">250мл</label>
            </div>

        </div>
        <div class="order_sugar">
            <h3 class="caption">Сахар</h3>
            <div class="order_sugar-inner">
                <input type="button" value="-" class="sugctrl" id="removeSugar" />
                <input type="checkbox" class="style-sugar" id="sugar_1" name="coffee_sugar" />
                <label for="sugar_1"></label>
                <input type="checkbox" class="style-sugar" id="sugar_2" name="coffee_sugar" />
                <label for="sugar_2"></label>
                <input type="checkbox" class="style-sugar" id="sugar_3" name="coffee_sugar" />
                <label for="sugar_3"></label>
                <input type="checkbox" class="style-sugar" id="sugar_4" name="coffee_sugar" />
                <label for="sugar_4"></label>
                <input type="checkbox" class="style-sugar" id="sugar_5" name="coffee_sugar" />
                <label for="sugar_5"></label>
                <input type="checkbox" class="style-sugar" id="sugar_6" name="coffee_sugar" />
                <label for="sugar_6"></label>
                <input type="button" value="+" class="sugctrl" id="addSugar" />
            </div>
        </div>
        <div class="order_syrup">
            <h3 class="caption">
                Сиропы
            </h3>
            <div class="order_syrup-inner">

                <input type="checkbox" class="style-syrup" data-caption="Ваниль" id="syrup_1" name="coffee_syrup" />
                <label for="syrup_1"> Ваниль </label>

                <input type="checkbox" class="style-syrup" data-caption="Шоколад" id="syrup_2" name="coffee_syrup" />
                <label for="syrup_2"> Шоколад </label>

                <input type="checkbox" class="style-syrup" data-caption="Карамель" id="syrup_3" name="coffee_syrup" />
                <label for="syrup_3"> Карамель </label>

                <input type="checkbox" class="style-syrup" data-caption="Мята" id="syrup_4" name="coffee_syrup" />
                <label for="syrup_4"> Мята </label>

                <input type="checkbox" class="style-syrup" data-caption="Клён" id="syrup_5" name="coffee_syrup" />
                <label for="syrup_5"> Клён </label>

                <input type="checkbox" class="style-syrup" data-caption="Имбирь" id="syrup_6" name="coffee_syrup" />
                <label for="syrup_6"> Имбирь </label>

                <input type="checkbox" class="style-syrup" data-caption="Лимон" id="syrup_7" name="coffee_syrup" />
                <label for="syrup_7"> Лимон </label>

                <input type="checkbox" class="style-syrup" data-caption="Апельсин" id="syrup_8" name="coffee_syrup" />
                <label for="syrup_8"> Апельсин </label>

                <input type="checkbox" class="style-syrup" data-caption="Миндаль" id="syrup_9" name="coffee_syrup" />
                <label for="syrup_9"> Миндаль </label>

                <input type="checkbox" class="style-syrup" data-caption="Лесной Орех" id="syrup_10" name="coffee_syrup" />
                <label for="syrup_10"> Лесной Орех </label>

                <input type="checkbox" class="style-syrup" data-caption="Амаретто" id="syrup_11" name="coffee_syrup" />
                <label for="syrup_11"> Амаретто </label>

            </div>
        </div>
    </div>
</section>`
 };

 function creatEats() {
     // drinks.innerHTML = '';

     drinks.style.display = "none";
     eats.style.display = "block";
     return eats.innerHTML = `<section class="container order-options-eats">
     <div class="order-options-eats--desc"><p>У нас в кофейнях можно найти только свежие десерты.</p>
     <p>Нам очень важно, чтобы вся еда была приготовлена из самых свежих и чистых ингредиентов без искусственных добавок и консервантов.</p></div>     
         <div class="order-options-eats-inner">
        
          
     <div class="order-options-eats-item">
         <input type="checkbox" class="stylesug checkcake" id="cherry" name="cake"/>
         <label for="cherry"><span></span>Пончик шоколадный</label>
         <img src="img/cake7.png" class="img-responsive">
         <p class="centerp">60 руб</p>
         <div class="order_count-inner">
         <input type="button" value="-" class="sugctrl" id="removeCount" />
         <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
         <input type="button" value="+" class="sugctrl" id="addCount" />
  </div>
     </div>

     <div class="order-options-eats-item">
         <input type="checkbox" class="stylesug checkcake" id="apricot" name="cake"/>
         <label for="apricot"><span></span>Пончик с клубничной начинкой</label>
         <img src="img/cake1.png" class="img-responsive">
         <p class="centerp">60 руб</p>
         <div class="order_count-inner">
         <input type="button" value="-" class="sugctrl" id="removeCount" />
         <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
         <input type="button" value="+" class="sugctrl" id="addCount" />
  </div>
     </div>

     <div class="order-options-eats-item">
         <input type="checkbox" class="stylesug checkcake" id="apple" name="cake"/>
         <label for="apple"><span></span>Пончик кокосовый</label>
         <img src="img/cake2.png" class="img-responsive">
         <p class="centerp">35 руб</p>
         <div class="order_count-inner">
                <input type="button" value="-" class="sugctrl" id="removeCount" />
                <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
                <input type="button" value="+" class="sugctrl" id="addCount" />
         </div>
     </div>

     <div class="order-options-eats-item">
     <input type="checkbox" class="stylesug checkcake" id="apple" name="cake"/>
     <label for="apple"><span></span>Пончик карамельный</label>
     <img src="img/cake3.png" class="img-responsive">
     <p class="centerp">35 руб</p>
     <div class="order_count-inner">
            <input type="button" value="-" class="sugctrl" id="removeCount" />
            <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
            <input type="button" value="+" class="sugctrl" id="addCount" />
     </div>
 </div>
  


 <div class="order-options-eats-item">
     <input type="checkbox" class="stylesug checkcake" id="apple" name="cake"/>
     <label for="apple"><span></span>Булочка слоеная с вишневой начинкой</label>
     <img src="img/cake8.png" class="img-responsive">
     <p class="centerp">75 руб</p>
     <div class="order_count-inner">
            <input type="button" value="-" class="sugctrl" id="removeCount" />
            <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
            <input type="button" value="+" class="sugctrl" id="addCount" />
     </div>
 </div>

 <div class="order-options-eats-item">
 <input type="checkbox" class="stylesug checkcake" id="apple" name="cake"/>
 <label for="apple"><span></span>Булочка слоеная с брикосовой начинкой</label>
 <img src="img/cake9.png" class="img-responsive">
 <p class="centerp">75 руб</p>
 <div class="order_count-inner">
        <input type="button" value="-" class="sugctrl" id="removeCount" />
        <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
        <input type="button" value="+" class="sugctrl" id="addCount" />
 </div>
</div>


<div class="order-options-eats-item">
<input type="checkbox" class="stylesug checkcake" id="apple" name="cake"/>
<label for="apple"><span></span>Булочка слоеная с клубничной начинкой</label>
<img src="img/cake10.png" class="img-responsive">
<p class="centerp">75 руб</p>
<div class="order_count-inner">
       <input type="button" value="-" class="sugctrl" id="removeCount" />
       <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
       <input type="button" value="+" class="sugctrl" id="addCount" />
</div>
</div>

<div class="order-options-eats-item">
<input type="checkbox" class="stylesug checkcake" id="apple" name="cake"/>
<label for="apple"><span></span>Булочка слоеная с сырной начинкой</label>
<img src="img/cake11.png" class="img-responsive">
<p class="centerp">75 руб</p>
<div class="order_count-inner">
       <input type="button" value="-" class="sugctrl" id="removeCount" />
       <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
       <input type="button" value="+" class="sugctrl" id="addCount" />
</div>
</div>
<!--
<div class="order-options-eats-item">
<input type="checkbox" class="stylesug checkcake" id="apple" name="cake"/>
<label for="apple"><span></span>Печенье с шоколадными крошками</label>
<img src="img/cake5.png" class="img-responsive">
<p class="centerp">35 руб</p>
<div class="order_count-inner">
       <input type="button" value="-" class="sugctrl" id="removeCount" />
       <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
       <input type="button" value="+" class="sugctrl" id="addCount" />
</div>
</div>
-->
<div class="order-options-eats-item">
<input type="checkbox" class="stylesug checkcake" id="apple" name="cake"/>
<label for="apple"><span></span>Круассан</label>
<img src="img/cake12_1.png" class="img-responsive">
<p class="centerp">35 руб</p>
<div class="order_count-inner">
       <input type="button" value="-" class="sugctrl" id="removeCount" />
       <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
       <input type="button" value="+" class="sugctrl" id="addCount" />
</div>
</div>

<div class="order-options-eats-item">
<input type="checkbox" class="stylesug checkcake" id="apple" name="cake"/>
<label for="apple"><span></span>Круассан с абрикосой начинкой</label>
<img src="img/cake15.png" class="img-responsive">
<p class="centerp">35 руб</p>
<div class="order_count-inner">
       <input type="button" value="-" class="sugctrl" id="removeCount" />
       <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
       <input type="button" value="+" class="sugctrl" id="addCount" />
</div>
</div>


<div class="order-options-eats-item">
<input type="checkbox" class="stylesug checkcake" id="apple" name="cake"/>
<label for="apple"><span></span>Круассан с шоколадными крошками</label>
<img src="img/cake16.png" class="img-responsive">
<p class="centerp">35 руб</p>
<div class="order_count-inner">
       <input type="button" value="-" class="sugctrl" id="removeCount" />
       <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
       <input type="button" value="+" class="sugctrl" id="addCount" />
</div>
</div>
<div class="order-options-eats-item">
<input type="checkbox" class="stylesug checkcake" id="apple" name="cake"/>
<label for="apple"><span></span>Круассан с шоколадной начинкой</label>
<img src="img/cake17.png" class="img-responsive">
<p class="centerp">35 руб</p>
<div class="order_count-inner">
       <input type="button" value="-" class="sugctrl" id="removeCount" />
       <input type="text" value="1" class="countcup" id="cake1" name="cupcount_1" />
       <input type="button" value="+" class="sugctrl" id="addCount" />
</div>
</div>


 </div></section>`
 };




 export { creatDrinks, creatEats };