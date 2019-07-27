apt-add-repository ppa:ansible/ansible -y
apt-get update && apt-get install ansible git -y


ansible-galaxy install -r requirements.yml
#ansible-playbook all.yml -i hosts.yml
