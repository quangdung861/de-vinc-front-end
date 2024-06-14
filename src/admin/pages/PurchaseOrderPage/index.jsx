import React from 'react'
import { useContext, useEffect } from 'react'
import { AdminContext } from 'admin/contexts/AdminProvider'

const PurchaseOrderPage = () => {

  const { setBreadcrum } = useContext(AdminContext)
  useEffect(() => {
    setBreadcrum("Nhập hàng")
  }, [])

  return (
    <div>PurchaseOrderPage</div>
  )
}

export default PurchaseOrderPage