const fetchData = (callback) => {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/photos",
    method: "GET",
    timeout:5000,
    dataType: "json",
    success: (response) => {
      console.log(response);
      callback(response);
    },
    error: (error) => {
      console.log(error);
    },
  });
};

const loadData = () => {
  fetchData((data) => {
    console.log(data);

    $.each(data, function (i, element) {
      const row = $("<tr>");
      const colId = $("<td>").text(element.id);
      const colAlbumId = $("<td>").text(element.albumId);
      const colTitle = $("<td>").text(element.title);
      const colImage = $("<td>")
        .append($("<img>").attr("src", element.thumbnailUrl))
        .attr("loading", "lazy")
        .css({
          height: "70px",
          width: "70px",
        });
      row.append(colId, colAlbumId, colTitle, colImage);
      $(".table tbody").append(row);
    });
  });
};

const saveData = () => {
  let newTitle = document.getElementById("newTitle").value;

  const NewData = {
    albumId: 1,
    id: 1,
    title: newTitle,
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  };

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/photos",
    method: "POST",
    timeout:5000,
    data: JSON.stringify(NewData),
    contentType: "application/json",
    success: (response) => {
      console.log(response);
     
    },
    error: (error) => {
      console.log(error);
    },
  });
};


const updateData = () => {
    let dataId = document.getElementById("dataId").value;
    let updateTitle = document.getElementById("updateTitle").value;
  
    const NewData = {
      albumId: 1,
      id: dataId,
      title: updateTitle,
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    };
  
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/photos/${dataId}`,
      method: "PUT",
      timeout:5000,
      data: JSON.stringify(NewData),
      contentType: "application/json",
      success: (response) => {
        console.log(response);
       
      },
      error: (error) => {
        console.log(error);
      },
    });
};


const findOne = () => {
    let findID = document.getElementById("findID").value;
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/photos/${findID}`,
        method: "GET",
        timeout:5000,
        dataType: "json",
        success: (response) => {
          console.log(response);
         
        },
        error: (error) => {
          console.log(error);
        },
      });
};

const DeleteData = () => {
    let DeleteID = document.getElementById("DeleteID").value;
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/photos/${DeleteID}`,
        method: "DELETE",
        timeout:5000,
        dataType: "json",
        success: (response) => {
          console.log(response);
         console.log('Deleted');
        },
        error: (error) => {
          console.log(error);
        },
      });
};