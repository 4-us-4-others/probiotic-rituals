window.onload = function(e) {
    const loader = document.getElementById('loading')
    loader.style.opacity = '0'
    setTimeout(function() {
        loader.parentNode.removeChild(loader)
    }, 400)
}
