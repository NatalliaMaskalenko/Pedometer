class CountdownTimer {
  constructor(targetDate) {
    this.targetDate = targetDate;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.updateTimer(this.getRefs());
    }, 1000);
  }

  getRefs() {
    const container = document.querySelector("#timer-1");
    const minsEl =container.querySelector('[data-value="mins"]');
    const secEl = container.querySelector('[data-value="sec"]');
    return { container, minsEl, secEl };
  }

  updateTimer({ container, minsEl, secEl }) {
      const time = this.targetDate;

          if (time <= 0) {
      clearInterval(this.intervalId);        
        minsEl.textContent = '00';
        secEl.textContent = '00';
      return;
    }
       
     minsEl.textContent = Math.floor(time  /  60)
          .toString()
          .padStart(2, "0");  
      
          secEl.textContent = Math.floor((time % 60) )
           .toString()
           .padStart(2, "0");       
          
           this.targetDate = time - 1;   
    }  
}

const timer = new CountdownTimer(540);

timer.start();
