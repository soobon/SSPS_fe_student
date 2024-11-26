import axiosInstance from "../axios/axios";

export const apiService = {
  getInfo: (ID) => axiosInstance.get("/student/info/" + ID),
  getStatistic: (ID, month) =>
    axiosInstance.get("/student/statistic/" + ID + "/" + month),
  getFileList: (ID) => axiosInstance.get("/student/file_list/" + ID),
  getHistory: (ID) => axiosInstance.get("/student/history/" + ID),

  addNewFile: (ID, file_name, num_pages) =>
    axiosInstance.post("/student/newFile/" + ID, {
      file_name,
      num_pages,
    }),

  deleteFile: (file_id) =>
    axiosInstance.delete("/student/deleteFile/" + file_id),
};

export default apiService;
