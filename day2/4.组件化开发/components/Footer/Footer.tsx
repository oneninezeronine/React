class Footer extends React.Component {
    render() {
        return (
            <div className="weui-tabbar">
                <a className="weui-tabbar__item weui-bar__item_on">
                    <span style={{
                        display: 'inline-block',
                        position: ' relative'
                    }}>
                        <img src="./images/icon_tabbar.png" alt="" className="weui-tabbar__icon" />
                        <span className="weui-badge" style={{ position: 'absolute', top: '-2px', right: '-13px' }}>8</span>
                    </span>
                    <p className="weui-tabbar__label">微信</p>
                </a>
                <a className="weui-tabbar__item">
                    <img src="./images/icon_tabbar.png" alt="" className="weui-tabbar__icon" />
                    <p className="weui-tabbar__label">通讯录</p>
                </a>
                <a className="weui-tabbar__item">
                    <span style={{
                        display: 'inline-block',
                        position: ' relative'
                    }}>
                        <img src="./images/icon_tabbar.png" alt="" className="weui-tabbar__icon" />
                        <span className="weui-badge weui-badge_dot" style={{
                            position: 'absolute',
                            top: 0,
                            right: '-6px'
                        }}></span>
                    </span>
                    <p className="weui-tabbar__label">发现</p>
                </a>
                <a className="weui-tabbar__item">
                    <img src="./images/icon_tabbar.png" alt="" className="weui-tabbar__icon" />
                    <p className="weui-tabbar__label">我</p>
                </a>
            </div>
        )
    }
}