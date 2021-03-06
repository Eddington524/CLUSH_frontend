import React, { Component } from 'react';

import './MainSectionEvent.scss';

class MainSectionEvent extends Component {
  render() {
    return (
      <section className="MainSectionEvent">
        <div className="MainSectionEventWrapper">
          <div>
            <img
              src="http://image.yes24.com/goods/96688102/800x0"
              alt="비누 이미지"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1613255348581-8237fe554c90?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHNvYXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt="비누 이미지"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1547484253-90ef06de15a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="액체 비누 이미지"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1584472282996-ada9315b89d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHNvYXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt="거품 이미지"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default MainSectionEvent;
