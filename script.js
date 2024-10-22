
    $(document).ready(function() {
        // Інтерактивність на наведення курсора
        $("#showcase-2 .showcase-item").hover(
            function() {
                $(this).addClass("active");
            }, function() {
                $(this).removeClass("active");
            }
        );
    
        // Інтерактивність на клік
        $("#showcase-2 .showcase-item").click(function() {
            $(this).toggleClass("active");
        });
    });
    
    // Додавання власних об'єктів на третю вітрину
    $("#add-item").click(function() {
        let newItem = $("#new-item").val();
        if (newItem) {
            $(".dynamic-showcase").append(`<div class="showcase-item"><p>${newItem}</p></div>`);
            $("#new-item").val(""); // очищення поля вводу
        }
    });

    // Додавання інтерактивності до нових об'єктів (на третій вітрині)
    $(document).on("click", ".dynamic-showcase .showcase-item", function() {
        $(this).toggleClass("active");
    });

