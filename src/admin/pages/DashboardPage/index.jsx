import { AdminContext } from "admin/contexts/AdminProvider"
import React, { useContext, useEffect } from "react"

const DashboardPage = () => {

  const { setBreadcrum } = useContext(AdminContext)
  useEffect(() => {
      setBreadcrum("Tổng quan")
  }, [])
 
  return (
    <div>
      <img src={require("admin/assets/images/dashboard-examples-hero.avif")} alt="" style={{ width: "100%", paddingTop: 150, objectFit: "cover" }} />
    </div>
  )
}

export default DashboardPage