export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container" style={{display:'flex', gap:24, alignItems:'flex-start', flexWrap:'wrap'}}>
        <div style={{flex:'1 1 320px'}}>
          <img src="/images/logo-weednerd.png" alt="logo" className="logo-img mb-2" />
          <p className="footer-note" style={{marginTop:8}}>WeedNerdGenetics — Seeds sold as souvenirs only. Please check local laws before germinating seeds.</p>
        </div>
        <div style={{flex:'0 0 160px'}}>
          <h4 className="font-semibold">Shop</h4>
          <ul style={{marginTop:8, listStyle:'none', padding:0}}>
            <li><a href="/shop">All Seeds</a></li>
            <li><a href="/shop?cat=indica">Indica</a></li>
            <li><a href="/shop?cat=sativa">Sativa</a></li>
          </ul>
        </div>
        <div style={{flex:'0 0 160px'}}>
          <h4 className="font-semibold">Legal</h4>
          <ul style={{marginTop:8, listStyle:'none', padding:0}}>
            <li><a href="/legal">Legal Notice</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="container" style={{textAlign:'center', marginTop:20}}>
        <div className="footer-note">© 2025 WeedNerdGenetics</div>
      </div>
    </footer>
  )
}
