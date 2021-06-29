const RoundNav = () => {
    function showNav(){
        const container=document.querySelector('.container');
        const circle=document.querySelector('.circle');
        container.classList.add('show-nav');
        circle.classList.add('show-nav');
    }
    function removeNav(){
        const container=document.querySelector('.container');
        const circle=document.querySelector('.circle');
        container.classList.remove('show-nav');
        circle.classList.remove('show-nav');
    }
    return ( 
        <div className="circle-container">
            <div className="circle">
                <button onClick={removeNav} id="close">
                    <i className="fas fa-times"></i>
                </button>
                <button onClick={showNav} id="open">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        </div>
     );
}
 
export default RoundNav;