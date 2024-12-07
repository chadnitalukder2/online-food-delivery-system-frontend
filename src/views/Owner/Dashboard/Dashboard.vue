<script setup>

</script>

<template>
 <div class="dashboard-container">
    <div class="dashboard-stats">
      <div class="stat-card">
        <h3>Sum Items</h3>
        <p class="stat-value" id="sum-items">0</p>
      </div>
      <div class="stat-card">
        <h3>Total Orders</h3>
        <p class="stat-value" id="total-orders">0</p>
      </div>
      <div class="stat-card">
        <h3>Total Categories</h3>
        <p class="stat-value" id="total-categories">0</p>
      </div>
      <div class="stat-card">
        <h3>Total Menus</h3>
        <p class="stat-value" id="total-menus">0</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}



/* Stats Section */
.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Stat Card */
.stat-card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: scale(1.05);
}

.stat-card h3 {
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
}

.stat-value {
  font-size: 32px;
  font-weight: bold;
  color: #27ae60;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .stat-card h3 {
    font-size: 16px;
  }

  .stat-value {
    font-size: 28px;
  }
}


</style>