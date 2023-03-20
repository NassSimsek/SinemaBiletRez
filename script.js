const container=document.querySelector('.container');
const count=document.getElementById('count');
const amount=document.getElementById('amount');
const select=document.getElementById('movie');
const seats=document.querySelectorAll('.seat:not(.reserved');

getFromLocalStorage();
calculateTotal();

container.addEventListener('click',function(e) {

   if(e.target.classList.contains('seat')&& !e.target.classList.contains('reserved')){
       e.target.classList.toggle('selected');
       calculateTotal();
      
   }
});

select.addEventListener('change',function(e){
       calculateTotal();
})

function calculateTotal(){
    const selectedSeaets=container.querySelectorAll('.seat.selected')
    
    const selectedSeatsArr=[];
    const seatsArr=[];

    selectedSeaets.forEach(function(seat){ // amele işi oldu "spread" opearatörü ile bunu yapacak ama daha öğrenmedin
        selectedSeatsArr.push(seat);
});
    seats.forEach(function(seat){
        seatsArr.push(seat);
    })

    let selectedSeatsIndex=selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });

   


    let selectedSeatCount=selectedSeaets.length;
      count.innerText=selectedSeatCount;
      amount.innerText=selectedSeatCount*select.value;

      saveToLocalStorage(selectedSeatsIndex);
}; 

function getFromLocalStorage(){
       const selectedSeaets=JSON.parse(localStorage.getItem('selectedSeats'));
        
       if(selectedSeaets !=null && selectedSeaets.length>0){
           seats.forEach(function(seat,index){
               if(selectedSeaets.indexOf(index) > -1){
                   seat.classList.add('selected');
               }
           })
       }





       const selectedMovieIndex=JSON.parse(localStorage.getItem('selectedMovieIndex'));

       if(selectedMovieIndex !=null){
           select.selectedIndex=selectedMovieIndex; // selectedIndex bir Dom propertysidir kullanıldğı elemanın indeksini bulur
       }
}


function saveToLocalStorage(indexs){
    localStorage.setItem('selectedSeats',JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex',select.selectedIndex); // bu hangi fimle ait olduğunu belirmtek için
}