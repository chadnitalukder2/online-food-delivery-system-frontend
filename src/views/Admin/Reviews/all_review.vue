<script setup>

</script>

<template>
  <div class="container">
    <div class="table-box">
      <div class="header">
        <h1>All Review</h1>

        <div class="btn">
          <button>
            <router-link>
              Add Category
            </router-link>
          </button>
        </div>
      </div>


      <table id="customers">
        <tr>
          <th># ID</th>
          <th>Image </th>
          <th>Name</th>
          <th>Action</th>
        </tr>
        <tbody>

          <tr>
            <td>#1</td>
            <td style="width: 120px; height: 100px">
              <img src="../../../assets/food-2.png" style="width: 100%; height: 100%" />
            </td>
            <td>hello</td>
            <td @click="openModalDelete()">
              <i class="fa-solid fa-trash-can delete-icon "></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#myModal {
  .modal_footer {
    button {

      cursor: pointer;
      background: #c1c1c1;
      color: #fff;
      border-radius: 4px;
      text-decoration: none;
      transition: all 0.4s;
      line-height: normal;
      min-width: 120px;
      border: none;
      min-height: 40px;
      border-radius: 3px;
      margin: 0 5px;
    }

  }

}



table {
  border-radius: 6px;
  overflow: hidden;
}

.container {
  width: 100%;
}

.table-box {
  padding: 50px 30px;
  border-radius: 8px;

  .header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    text-align: center;
    align-items: center;

    .btn {
      text-align: right;
      padding-bottom: 10px;

      button {
        padding: 10px 20px;
        border: 1px solid #9c4202;
        background: #9c4202;
        border-radius: 6px;
        cursor: pointer;
        transition: all ease-in .3s;

        a {
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          color: #fff;
        }

        &:hover {
          transform: scale(1.05);
          background-color: #fff;

          a {
            color: #9c4202;
          }
        }
      }
    }

    h1 {
      margin-top: 0px;
      font-size: 22px;
      color: #444;
      font-weight: 600;
    }
  }

}

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #f3ededad;
  padding:10px 12px;
  text-align: left;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers th {
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: left;
  background-color: rgb(237 236 236 / 68%);
  color: #444;
  font-size: 16px;
}
#customers td{
  color: #656262;
  font-size: 14px;
}
.delete-icon{
    color: #eb1613;
    cursor: pointer;
}
</style>