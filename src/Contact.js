const Contact = () => {
    return ( 
        <div className="pg3">
        <div className="box">
          <div className="con1">
            <h1>GET IN TOUCH</h1>
            <label className="name" htmlFor="">Name</label>
            <input id="name" type="text" placeholder="Whats your Name?" />
            <label className="email" htmlFor="">Contact</label>
            <input id="email" type="text" placeholder="random007@example.com" />
            <label className="message" htmlFor="">Message</label>
            <textarea name="" id="message" cols="30" rows="10" placeholder="Enter message here..."></textarea>
            <button id="btn">Send</button>
          </div>
          <div className="con2">
            <h1>Contact Info</h1>
            <p>Address: Neverland, Watashiwa <br/> MARS 121526 (Near Asteroid Belt)</p>
            <p>Phone: +1 (256)-1286965,  <br/> +1 (257)-1296542</p>
            <p>Email: moc.liamg@gmail.com </p>
          </div>
        </div>
      </div>
     );
}
 
export default Contact;