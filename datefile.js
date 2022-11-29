var date = new Date().getDate(); //Current Date
           var month = new Date().getMonth() +1 ; //Current Month
           var year = new Date().getFullYear(); //Current Year
           this. updatecurrentdate(date + '/' + month + '/' + year)
           await AsyncStorage.setItem('xxx',this.state.current_date)
           var hours = new Date().getHours(); //Current Hours
           var min = new Date().getMinutes(); //Current Minutes
           this. updatecurrenttime(hours + ' : ' + min )
          await AsyncStorage.setItem('key2',this.state.current_time)


<Text style={styles.textview1}>  {current_date} </Text>
  <Text style={styles.textview1}>  {current_time} </Text>

const data3 = await AsyncStorage.getItem('xxx')
              set_actualdate(data3)
              const data4 = await AsyncStorage.getItem('key2')
              set_actualtime(data4)