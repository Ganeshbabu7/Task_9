let countDown = 10;
let displayEl = document.getElementById('display');
let wishEL = document.getElementById('wish')

setTimeout(()=>{
    displayEl.innerHTML=countDown--;
        setTimeout(()=>{
            displayEl.innerHTML=countDown--;
                setTimeout(()=>{
                    displayEl.innerHTML=countDown--;
                        setTimeout(()=>{
                            displayEl.innerHTML=countDown--;
                                setTimeout(()=>{
                                    displayEl.innerHTML=countDown--;
                                        setTimeout(()=>{
                                            displayEl.innerHTML=countDown--;
                                                setTimeout(()=>{
                                                    displayEl.innerHTML=countDown--;
                                                        setTimeout(()=>{
                                                            displayEl.innerHTML=countDown--;
                                                                setTimeout(()=>{
                                                                    displayEl.innerHTML=countDown--;
                                                                        setTimeout(()=>{
                                                                            displayEl.innerHTML=countDown--;
                                                                                setTimeout(()=>{
                                                                                    displayEl.innerHTML = "";
                                                                                    wishEL.innerHTML=`"Wish you <span>Happy New Year</span> - 2023"`;
                                                                                },1000)    
                                                                        },1000)
                                                                },1000)
                                                        },1000)
                                                },1000)
                                        },1000)
                                },1000)
                        },1000)
                },1000)
        },1000)
},1000)