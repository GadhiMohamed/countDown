let watch = document.querySelector('.cd'),
    ft = document.querySelector('.full-text'),
    st = document.querySelector('.short-text'),
    seconds = 1420;


let count = setInterval(() => counter(), 1000);

let counter = function () {
    let dmin = Math.floor(seconds / 60);
    let dsec = seconds % 60;



    if (seconds > 0) {
        if (seconds < 10) {
            dsec = "0" + dsec;
        }
        seconds -= 1;
        ft.innerHTML = `Time is : ${dmin} minutes and ${dsec} seconds`;
        st.innerHTML = `${dmin}: ${dsec} `;
    } else {
        watch.innerHTML = 'Done';
        clearInterval(count);
    }
}