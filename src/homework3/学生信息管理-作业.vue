<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="handleAdd(editIndex)">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in studentsInfo" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="handleDel(index)">删除</button>
            <button @click="handleEdit(index)">编辑</button>
          </td>
        </tr>
        <tr v-show="!studentsInfo.length">
          暂无学生信息!
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      sex: "",
      studentsInfo: [],
      isEdit: false,
      editIndex: 0,
    };
  },
  methods: {
    handleAdd(index) {
      if (!this.name && !this.age && !this.sex)
        return alert("请填写完整信息！~");

      if (this.isEdit) {
        this.studentsInfo[index].name = this.name;
        this.studentsInfo[index].age = this.age;
        this.studentsInfo[index].sex = this.sex;
        this.isEdit = false;
      } else {
        this.studentsInfo = [
          ...this.studentsInfo,
          {
            id: this.studentsInfo.length,
            name: this.name,
            age: this.age,
            sex: this.sex,
          },
        ];
      }
      this.name = "";
      this.age = "";
      this.sex = "";
      console.log(this.studentsInfo);
    },
    handleDel(index) {
      this.studentsInfo.splice(index, 1);
    },
    handleEdit(index) {
      this.name = this.studentsInfo[index].name;
      this.age = this.studentsInfo[index].age;
      this.sex = this.studentsInfo[index].sex;
      this.isEdit = true;
      this.editIndex = index;
    },
  },
};
</script>
