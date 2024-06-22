const Header =() => {
  return (
    <>
     <div className="header">
            
            <div className="searchinfo">
                <ul>
                    <li className="select-opt">
                        <select name="language" id="language">
                            <option value="default">EN</option>
                            <option value="Bangla">BN</option>
                            <option value="Arabic">AB</option>
                        </select>
                    </li>
                    <li className="select-opt">
                        <select name="currency" id="currency">
                            <option value="usd">USD</option>
                            <option value="euro">Euro</option>
                            <option value="bdt">BDT</option>
                        </select>
                    </li>
                    <li className="select-opt">
                        <a href="#"><i className="fa fa-search"></i></a>
                    </li>
                </ul>
            </div>
            <div className="contactinfo">
                <ul>
                    <li><a href="">+1 222 777 6565</a></li>
                    <li><a href="">Sign In</a></li>
                    <li><a href="">Register</a></li>
                </ul>
            </div>

        </div>

    </>
  )
}

export default Header