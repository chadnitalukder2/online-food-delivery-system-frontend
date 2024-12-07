<script setup>

</script>

<template>
  <div class="dashboard-container">
    <div class="dashboard-stats">
      <div class="stat-card">
        <h3>Total Order : 10</h3>
        <h3>Total Order Amount : 10</h3>
      </div>
      <div class="stat-card">
        <h3>Total Category Items</h3>
        <p class="stat-value" id="sum-items">0</p>
      </div>
      <div class="stat-card">
        <h3>Total Menu Items</h3>
        <p class="stat-value" id="sum-items">0</p>
      </div>
    
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  padding: 50px 50px;
  width: 100%;
}

.dashboard-stats {
  display: flex;
  gap: 20px;
  justify-content: space-between;



  .stat-card {
    flex-basis: 33%;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }
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