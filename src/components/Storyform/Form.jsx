import React from 'react';
import styles from './Form.module.css';
const Form = ({ addstory, handleFormChange,category,Setcategory}) => {
    return (
        <div className={styles.wrapper}>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '32rem', alignItems: 'center' }}>
                <label htmlFor="inputHeading">Heading:</label>
                <input
                    type="text"
                    id="inputHeading"
                    name="heading"
                    className={styles.input}
                    value={addstory?.heading}
                    onChange={handleFormChange}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '31.5rem', alignItems: 'center' }}>
                <label htmlFor="inputDescription">Description:</label>
                <textarea
                    id="inputDescription"
                    name="description"
                    className={styles.input1}
                    value={addstory?.description}
                    onChange={handleFormChange}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '32.5rem', alignItems: 'center' }}>
                <label htmlFor="inputImage">Image:</label>
                <input
                    type="text"
                    id="inputImage"
                    name="images"
                    className={styles.input}
                    value={addstory?.images}
                    onChange={handleFormChange}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '32rem', alignItems: 'center' }}>
                <p>Category</p>
                <select className={styles.input} name="category" value={category}   onChange={(e) => Setcategory(e.target.value)}>
                    <option value="SelectCategory">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Healthandfitness">Healthandfitness</option>
                    <option value="Education">Education</option>
                    <option value="Movie">Movie</option>
                </select>
            </div>
        </div>
    );
};

export default Form;
