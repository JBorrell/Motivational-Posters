$(document).on('submit', '#search-form', function(e) {
    e.preventDefault();
    var options = {
        keywords: $('#search-term').val(),
        container: $('#search-results')
    };
    findImagesOnGoogle(options);
});

$(document).on('click', '#search-results img', function() {
  var url = $(this).data('url');
  $("#workspace img").remove();
  var img = $("<img>").attr('src', url);
  $("#workspace").append(img);
});

$(document).on('ready', function() {
    $("#caption").text($("#caption-text").val());
});

$(document).on('input', '#caption-text', function() {
    $("#caption").text($(this).val());
});

$(document).on('ready', function() {
    $("#caption2").text($("#bottom-text").val());
})

$(document).on('input', '#bottom-text', function() {
    $("#caption2").text($(this).val());
})



$(document).on('change', '#caption-left', function() {
    $("#caption").css("left", $(this).val() + 'px');
})

$(document).on('change', '#caption-top', function() {
    $("#caption").css("top", $(this).val() + 'px');
})

$(document).on('change', '#caption-width', function() {
    $("#caption").css("width", $(this).val() + 'px');
})

$(document).on('change', '#caption-size', function() {
    $("#caption").css("font-size", $(this).val() + 'px');
})

$(document).on('change', '#caption-colour', function() {
    $("#caption").css("color", $(this).val());
})

$(document).on('change', '#caption-align', function() {
    $("#caption").css("text-align", $(this).val());
})




$(document).on('change', '#caption2-left', function() {
    $("#caption2").css("left", $(this).val() + 'px');
})

$(document).on('change', '#caption2-bottom', function() {
    $("#caption2").css("bottom", $(this).val() + 'px');
})

$(document).on('change', '#caption2-width', function() {
    $("#caption2").css("width", $(this).val() + 'px');
})

$(document).on('change', '#caption2-size', function() {
    $("#caption2").css("font-size", $(this).val() + 'px');
})

$(document).on('change', '#caption2-colour', function() {
    $("#caption2").css("color", $(this).val());
})

$(document).on('change', '#caption2-align', function() {
    $("#caption2").css("text-align", $(this).val());
})