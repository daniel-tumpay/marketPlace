<?php
    include ("conexion.php");
    $conn=conectar();
    $sql="SELECT * FROM Producto";
    $query=mysqli_query($conn,$sql);
    $row=mysqli_fetch_array($query);
    $num_resultados = mysqli_num_rows($query);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Products - Family Market</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="img/logo2.png" type="image/gif">
    <script src="https://kit.fontawesome.com/44a1776457.js" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" charset="utf-8"></script>
</head>
<body>

    <div class="loader-wrapper">
        <span class="loader"><span class="loader-inner"></span></span>
    </div>

<!--<div class="container">
        <div class="navbar">
            <div class="logo">
                <a href="index.html"><img src="img/logo.png" width="125px"></a>
            </div>
            <nav>
                <ul id="MenuItems">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="products.html">Productos</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Contactos</a></li>
                    <li><a href="account.html">Cuenta</a></li>
                </ul>
            </nav>
            <li class="cart">
                <a href="cart.html">
                    <img src="img/cart.png" width="30px" height="30px"><span>0</span>
                </a>
                <img src="img/menu.png" class="menu-icon" onclick="menutoggle();">
            </li>
        </div>
    </div>-->
    <header>
        <a href="index.php" class="logo"><img src="img/logo.png" width="100px"></a>
        <div class="toggle" onclick="toggleMenu();"></div>
        <ul class="menu">
            <li><a href="index.php">Inicio</a></li>
            <li><a href="products.html">Productos</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="https://api.whatsapp.com/send?phone=+51994906181" target="_blank">WhatsApp</a></li>
            <li><a href="account.html">Cuenta</a></li>
            <li class="cart">
                <a href="cart.html">
                    <img src="img/cart.png" width="30px" height="30px"><span>0</span>
                </a>
                <img src="img/menu.png" class="menu-icon" onclick="menutoggle();">
            </li>
        </ul>
    </header>

    <!-- Feactured Products -->
    <div class="small-container">
    <!--<h2 class="title">Feactured Products</h2>-->
        <div class="row row-2">
            <br>
            <br>
            <section>
                <ul>
                    <li class="list active" data-filter="all">Todos</li>
                    <li class="list" data-filter="Limpieza">Limpieza</li>
                    <li class="list" data-filter="Lacteos">Lácteos</li>
                    <li class="list" data-filter="Cervezas">Licores</li>
                    <li class="list" data-filter="Aguas">Aguas y Bebidas</li>
                    <li class="list" data-filter="Abarrotes">Abarrotes</li>
                    <li class="list" data-filter="Higiene">Higiene</li>
                    <li class="list" data-filter="Libros">Librería</li>
                    <li class="list" data-filter="Desayuno">Desayuno</li>
                </ul>
            </section>
            <h2>Todos los Productos</h2>
            <!-- <select>
                <option>Default Shorting</option>
                <option>Short by price</option>
                <option>Short by popularity</option>
                <option>Short by rating</option>
                <option>Short by sale</option>
            </select> 
            -->
        </div>

        <div class="row" style="display: none;">
            <?php
                   /* echo "<p>Número de usuarios encontrados: ".$num_resultados."</p>";*/
                for ($i=1; $i <$num_resultados; $i++) {
                $row = mysqli_fetch_array($query); 
            ?>
            <div class="col-4 <?php echo $row['Categoria']?>">
                <figure class="product-image">
                    <img src="data:image/jpg;base64,<?php echo base64_encode($row['Imagen']);?>">
                    <div class="product-over">
                        <button class="btn btn2-small addToCart"><i class="fas fa-cart-plus"></i>Add to cart</button>
                        <input type="hidden" value="14" />
                        <a href="#" class="btn btn-small">More Info</a>
                    </div>
                </figure>
                <h4><?php echo $row['Producto']?> <?php echo $row['Variedad']?> <?php echo $row['Marca']?> <?php echo $row['Formato']?></h4>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <p>S/<?php echo $row['Precio']?>.00</p>
            </div>
            <?php 
                }
            ?> 
        </div>

        <div class="pagination">
            <li class="page-item previous-page disable"><a class="page-link" href="#">Prev</a></li>
            <li class="page-item current-page active"><a class="page-link" href="#">1</a></li>
            <li class="page-item dots"><a class="page-link" href="#">...</a></li>
            <li class="page-item current-page"><a class="page-link" href="#">5</a></li>
            <li class="page-item current-page"><a class="page-link" href="#">6</a></li>
            <li class="page-item dots"><a class="page-link" href="#">...</a></li>
            <li class="page-item current-page"><a class="page-link" href="#">10</a></li>
            <li class="page-item next-page"><a class="page-link" href="#">Next</a></li>
        </div>
        <!--<div class="page-btn">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>&#8594;</span>
        </div>-->
    </div>
    

    <!-- Footer -->
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and Ios mobile phone</p>
                    <div class="app-logo">
                        <img src="img/play-store.png">
                        <img src="img/app-store.png">
                    </div>
                </div>
                <div class="footer-col-2">
                    <img src="img/logo.png">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, quibusdam maiores omnis voluptate nulla aspernatur
                        iste saepe.</p>
                </div>
                <div class="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright">
        <p>Copyright © 2021 Danny Mind Proyect. All Right Reserved</p>
    </div>
    <script src="js/script.js"></script>
    <script src="js/shoppingCartV2.js"></script>
    
    <script>
        window.addEventListener('scroll', function(){
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
        });
    </script>

    <script>
        function getPageList(totalPages, page, maxLength){
            function range(start, end){
                return Array.from(Array(end - start + 1), (_, i) => i + start);
            }

            var sideWidth = maxLength < 9 ? 1 : 2;
            var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
            var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

            if(totalPages <= maxLength){
                return range(1, totalPages);
            }

            if(page <= maxLength - sideWidth - 1 - rightWidth){
                return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
            }

            if(page >= totalPages - sideWidth - 1 - rightWidth){
                return range(1, sideWidth).concat(0, range(totalPages- sideWidth - 1 - rightWidth - leftWidth, totalPages));
            }

            return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
        }

    $(function () {
        var numberOfItems = $(".row .col-4").length;
        var limitPerPage = 4; //How many card items visible per a page
        var totalPages = Math.ceil(numberOfItems / limitPerPage);
        var paginationSize = 7; //How many page elements visible in the pagination
        var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".row .col-4").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $(".pagination li").slice(1, -1).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
                .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
                    .attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".next-page");
        });

        $(".previous-page").toggleClass("disable", currentPage === 1);
        $(".next-page").toggleClass("disable", currentPage === totalPages);
        return true;
    }

    $(".pagination").append(
        $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
        $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
    );

    $(".row").show();
    showPage(1);

    $(document).on("click", ".pagination li.current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(".next-page").on("click", function () {
        return showPage(currentPage + 1);
    });

    $(".previous-page").on("click", function () {
        return showPage(currentPage - 1);
    });
    });
    </script>

    <script>
        $(window).on("load", function () {
            $(".loader-wrapper").fadeOut("slow");
        });
    </script>
    
</body>
</html>