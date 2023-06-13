const chitiet_box_img = document.querySelector('.chitiet-small-box-img');
chitiet_box_img.classList.add('chitiet-box-img-active');
const img_small = document.querySelectorAll('.chitiet-small-box-img img')
const big_img = document.querySelector('.chitiet-big-img img')
for(let i=0;i<img_small.length;i++) {
    img_small[i].onclick = function() {
    const img_small_active = document.querySelector('.chitiet-small-box-img.chitiet-box-img-active')
    img_small_active.classList.remove('chitiet-box-img-active')
    const a = img_small[i].getAttribute('src')
    big_img.setAttribute('src',a)
    document.querySelectorAll('.chitiet-small-box-img')[i].classList.add('chitiet-box-img-active')
}
}
// Sản phẩm to
let a1=1
document.querySelector('.cong').onclick = function() {
    a1= a1+1
    document.querySelector('.value-quantity').value = a1
}
document.querySelector('.tru').onclick = function() {
    if(a1<2){
        return 
    }else{
        a1= a1-1
        document.querySelector('.value-quantity').value = a1
    }
}
const chitiet_mota = document.querySelector('.chitiet-title-mota')
const chitiet_rate = document.querySelector('.chitiet-title-rate')
const chitiet_mota_body = document.querySelector('.chitiet-mota')
const chitiet_rate_body = document.querySelector('.chitiet-rate')
chitiet_rate.onclick = function() {
    chitiet_rate.classList.add('chitiet-body-active')
    chitiet_mota.classList.remove('chitiet-body-active')
    chitiet_rate_body.classList.add('chitiet-active')
    chitiet_mota_body.classList.remove('chitiet-active')
}
chitiet_mota.onclick = function() {
    chitiet_rate.classList.remove('chitiet-body-active')
    chitiet_mota.classList.add('chitiet-body-active')
    chitiet_rate_body.classList.remove('chitiet-active')
    chitiet_mota_body.classList.add('chitiet-active')
}

