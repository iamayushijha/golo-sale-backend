import mediaModel from "../module/media.model.js"

class MediaService {

    insertMedia = (data) => {
        return mediaModel.create(data);
    }

    getMedia = () => {
        return mediaModel.findAll({ raw: true });
    }
    deleteMedia = (id) => {
        return mediaModel.destroy({ where: id });
    }
}

export default new MediaService();