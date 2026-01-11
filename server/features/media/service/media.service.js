import mediaModel from "../module/media.model.js"

class MediaService {

    insertMedia = (data) => {
        return mediaModel.create(data);
    }

    getAllMedia = () => {
        return mediaModel.findAll({ raw: true });
    }

    async getMediaById(mediaId) {
        return mediaModel.findByPk(mediaId);
    }

    deleteMedia = (id) => {
        return mediaModel.destroy({ where: id });
    }
}

export default new MediaService();