import AgentModel from  '../model/agent.model.js'

class AgentService {

    getAllDeliveryPartner(){
        return AgentModel.findAll()
    }

    addDeliveryPartner(agent){
        return AgentModel.create(agent)
    }


    updateDeliveryPartner(agentId,agentData){
        return AgentModel.update(agentData,{
            where: {agentId: agentId}
        })
    }

    deleteDeliveryPartner(agentId){
        return AgentModel.destroy({where: {agentId: agentId}})
    }
}

export default new AgentService();