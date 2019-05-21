<?php

    function outputOrderRow($file, $title, $quantity, $price) {
        echo "<tr>";
        //TODO
        $total = $price*$quantity;
        $src = "images/books/tinysquare/".$file;
        print <<<END
                <td><img src=$src alt=""></td>
                <td>$title</td>
                <td>$quantity</td>
                <td>$price</td>
                <td>$total</td>
END;

        echo "</tr>";
    }
?>