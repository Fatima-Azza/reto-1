// FUNCIONES QUE AHORRA LINEAS DE CODIGO //

function id(id) {

    return document.getElementById(id);

}

id('cantantes_1').addEventListener("click", sacar => {

    id('slider').classList.remove('transition');
    id('slider').classList.add('transition');

    id('slider').innerHTML = /*html*/ `
        <div id="slide1">
        <ul class="slider1">
        <li><a href="#modal1"><img src="imgCantantes/davidguetta.png" alt=""></br>
            <h2>David Guetta</h2>
            <p>1 proximos festivales</p>
            </a>
        </li>
        
        <li><a href="#modal2"><img src="imgCantantes/maroon5.jpg" alt=""></br>
            <h2>Maroon 5</h2>
            <p>1 proximos festivales</p>
            </a>
        </li>
        
        <li><a href="#modal3"><img src="imgCantantes/martingarrix.jpg" alt=""></br>
            <h2>Martin Garrix</h2>
            <p>1 proximos festivales</p>
            </a>
        </li>
        
        <li><a href="#modal4"><img src="imgCantantes/tiesto.webp" alt=""></br>
            <h2>Tiesto</h2>
            <p>1 proximos festivales</p>
            </a>
        </li>
                
        <li><a href="#modal5"><img src="imgCantantes/m83.webp" alt=""></br>
            <h2>M83</h2>
            <p>1 proximos festivales</p>
            </a>
        </li>
                
        <li><a href="#modal6"><img src="imgCantantes/calvinharris.jpg"></br>
            <h2>Calvin Harris</h2>
            <p>1 proximos festivales</p>
            </a>
        </li>
        </ul>
    </div>
    </div> `;

});

id('cantantes_2').addEventListener("click", sacar => {

    id('slider').classList.add('transition');

    id('slider').innerHTML = /*html*/ `
        <div id="slide2">
            <ul class="slider2">
                <li><a href="#modal1"><img src="imgCantantes/dualipa.webp" alt=""></br>
                    <h2>Dua Lipa</h2>
                    <p>1 proximos festivales</p>
                    </a>
                </li>
                <li><a href="#modal2"><img src="imgCantantes/ed_sheeran.webp" alt=""></br>
                    <h2>Ed Sheeran</h2>
                    <p>10 proximos festivales</p>
                    </a>
                </li>
                <li><a href="#modal3"><img src="imgCantantes/billie.webp" alt=""></br>
                    <h2>Billie Eilish</h2>
                    <p>1 proximos festivales</p>
                    </a>
                </li>
                <li><a href="#modal4"><img src="imgCantantes/jungkook.jpg" alt=""></br>
                    <h2>Jungkook</h2>
                    <p>1 proximos festivales</p>
                    </a>
                </li>
                <li><a href="#modal5"><img src="imgCantantes/harrystyle.jpg" alt=""></br>
                    <h2>Harry Style</h2>
                    <p>1 proximos festivales</p>
                </li>
                <li><a href="#modal6"><img src="imgCantantes/katyperri.jpg"></br>
                <h2>Katy Perry</h2>
                <p>1 proximos festivales</p>
                </a>
            </li>
            </ul>
        </div>`;
});

id('cantantes_3').addEventListener("click", sacar => {

    id('slider').classList.add('transition');

    id('slider').innerHTML = /*html*/ `
    <div id="slide3">
    <ul class="slider3">
        <li><a href="#modal1"><img src="imgCantantes/u2.jpg" alt=""></br>
            <h2>U2</h2>
            <p>1 proximos festivales</p>
            </a>
        </li>
        <li><a href="#modal2"><img src="imgCantantes/hollow.jpg" alt=""></br>
            <h2>Hollow Coves</h2>
            <p>1 proximos festivales</p>
            </a>
        </li>
        <li><a href="#modal3"><img src="imgCantantes/charlei.webp" alt=""></br>
            <h2>Charlie Puth</h2>
            <p>1 proximos festivales</p>
            </a>
        </li>
        <li><a href="#modal4"><img src="imgCantantes/drake.jpg" alt=""></br>
            <h2>Drake</h2>
            <p>1 proximos festivales</p>
            </a>
        </li>
        <li><a href="#modal5"><img src="imgCantantes/post.webp" alt=""></br>
            <h2>Post Malone</h2>
            <p>1 proximos festivales</p>
            </a>
        </li>
        <li><a href="#modal6"><img src="imgCantantes/imagine.webp" alt=""></br>
          <h2>Imagine Dragons</h2>
          <p>1 proximos festivales</p>
          </a>
      </li>
    </ul>
</div>
</div>`;
});