import React from 'react'
import returnPolicyImg from "client/assets/images/return-policy.png"
import refunePolicyImg from "client/assets/images/refune-policy.jpg"
import warrantyPolicyImg from "client/assets/images/warranty-policy.jpg"
import membershipPolicyImg from "client/assets/images/membership.jpg"
import "./styles.scss";

const PolicyPage = () => {
  return (
    <div className='policy-page'>
        <img src={returnPolicyImg} alt="" className="policy-item" />
        <img src={refunePolicyImg} alt="" className="policy-item" />
        <img src={warrantyPolicyImg} alt="" className="policy-item" />
        <img src={membershipPolicyImg} alt="" className="policy-item" />
    </div>
  )
}

export default PolicyPage