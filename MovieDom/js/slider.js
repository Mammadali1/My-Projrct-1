class Slider{
    constructor(){
        this.count = 0;
    }

    render(data){
        console.log(this.count)
        for(let i=0; i<data.length;i++){
            data[i].style.transform = `translateX(-${this.count *304}px)`
        }
    }
    buttons(LeftBtn,rightBtn,data){
   
        rightBtn.addEventListener('click', ()=>{
            
            if((data.length - 4) > this.count){
                this.count++;
            }else{
                this.count = 0;
            }
            this.render(data)

            
        })
        LeftBtn.addEventListener('click', ()=>{
            if(this.count >=0){
                this.count--;
                this.render(data) 
            }
            
        })
    }
}

export default new Slider;