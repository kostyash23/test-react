  import React, { Component } from 'react';
  import styles from './Style.module.css'

  class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        
        items: []
      };
    }
    componentDidMount() {
        fetch("https://run.mocky.io/v3/24b24d9e-fd3b-4090-affb-0530827b65ff")
          .then(res => {
            return res.json()} )
          .then(
            (result) => {
              this.setState({
                items: result.products
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
      }

      render() {
          
        const { error, items } = this.state;
        
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        }  else {
          return (
            <ul >
              {items.map(item => (
                <li key={item.asin} className={styles.item}>
                 <p> <img src={item.img} className={styles.img} /> name: <a href={item.link} >{item.name}</a> <br/> price:{item.price}  </p> 
                </li>
              ))}
            </ul>
          );
        }
      }


  }




export default List;