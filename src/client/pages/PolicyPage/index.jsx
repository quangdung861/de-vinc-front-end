import React from 'react'
import returnPolicyImg from "client/assets/images/return-policy.png"
import refunePolicyImg from "client/assets/images/refune-policy.jpg"
import warrantyPolicyImg from "client/assets/images/warranty-policy.jpg"
import "./styles.scss";

const PolicyPage = () => {
  return (
    <div className='policy-page'>
        <img src={returnPolicyImg} alt="" className="return-policy-img" />
        <img src={refunePolicyImg} alt="" className="return-policy-img" />
        <img src={warrantyPolicyImg} alt="" className="return-policy-img" />
    </div>
  )
}

export default PolicyPage