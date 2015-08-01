# Flux 概念筆記
Flux是一個由Facebook提出的前端架構概念，並不是一套框架(framework)，而是個設計模式(design pattern or architecture pattern)，其理念獲得不少社群大大們的愛戴，他們進而提出各種實作方案，例如Redux, Reflux, Fluxible。本篇僅記錄Flux最原始的架構概念，而非任何一套實作框架的筆記。

### Install
1. `git clone https://github.com/chiunhau/simple-flux-tutorial.git`
2. `cd simple-flux-tutorial`
3. `npm install`
4. 打開index.html就可以囉！

### 核心哲學

#### 單向資訊流
Components => Actions => Dispatcher => Store => Components
例如：觸發「新增Todo時」，component呼叫action裡的東西，dispatcher再把這個東西附上參數，丟到store裡更改data，store再告訴component「該修改view的東東了（新增todo）」

一個一個分析吧！

####Component/View
這邊就是ReactJS在做的，User Interface的部分，不過所有的Initial State並不是直接宣告，而是從Store取出來，
監聽Store：要給擁有該State的Component一個監聽器，只要監聽到Store那邊有Change Event，就要從Store拿出新的data來取代原本的State（即this.setState...）
發出Action：Onclick之後，呼叫Action裡面相對應的function，如todoAction.addItem(newItem)。就醬不用管其他的，一行呼叫他就好

####Action
裡面定義了各種action，例如addItem, removeItem...，然而，當View發出Event時，這些function們並沒有直接面對Store裡的Data，而是告訴Dispatcher說：「啊！我收到了一個XXX的Event還有參數，幫我把這個請求送到Store做處理」，並且附上actionType（就哪個Event）與data（就參數）

就醬，不管Store

####Dispatcher
他建立了兩者間的溝通模式，即Dispatcher要根據Action丟過來的actionType與data呼叫對應的Store function

####Store
宣告原始data
宣告Components監聽store Change Event的function
宣告Action更動store data的function