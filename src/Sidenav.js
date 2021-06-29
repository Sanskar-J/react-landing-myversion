const SideNav = () => {
    function showAbout(){
        const pg1=document.querySelector('.pg1');
        const container=document.querySelector('.container');
        const circle=document.querySelector('.circle');
        const pg2=document.querySelector('.pg2');
        const pg3=document.querySelector('.pg3');
      container.classList.remove('show-nav')
      pg1.classList.add('remo')
      circle.classList.remove('show-nav')
      pg2.classList.add('show');
      pg3.classList.remove('show');
      
    }
    function showHome(){
        const pg1=document.querySelector('.pg1');
        const container=document.querySelector('.container');
        const circle=document.querySelector('.circle');
        const pg2=document.querySelector('.pg2');
        const pg3=document.querySelector('.pg3');
      console.log(container);
      container.classList.remove('show-nav')
      pg1.classList.remove('remo')
      circle.classList.remove('show-nav')
      pg2.classList.remove('show');
      pg3.classList.remove('show');
    }
    function showContact(){
        const pg1=document.querySelector('.pg1');
        const container=document.querySelector('.container');
        const circle=document.querySelector('.circle');
        const pg2=document.querySelector('.pg2');
        const pg3=document.querySelector('.pg3');
      container.classList.remove('show-nav')
      pg1.classList.add('remo')
      circle.classList.remove('show-nav')
      pg2.classList.remove('show');
      pg3.classList.add('show');
    }
  
    function useToggle() {
        const ball = document.querySelector('.ball');
      const html = document.querySelector('html');
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        ball.style.animation = 'slideOff 0.3s linear forwards'
      }
      else {
        html.classList.add('dark');
        ball.style.animation = 'slideOn 0.3s linear forwards'
      }
    }
    return ( 
        <div className="nav-container">
      <label for="" onClick={useToggle} className="toggle">
            <div className="ball"></div>
        </label>
        <div onClick={showAbout} className="about"><i className="fas fa-user-alt"></i> About</div>
        <div onClick={showHome}className="home"><i className="fas fa-home"></i>Home</div>
        <div onClick={showContact} className="contact"><i className="fas fa-envelope"></i>Contact</div>
      </div>
     );
}
 
export default SideNav;