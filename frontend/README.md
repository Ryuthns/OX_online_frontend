# Commit 1 : Initialize react project

สร้าง React โปรเจคโดยใช้ คำสั่ง npx create-react-app xo-project จากนั้นทำการลบไฟล์ที่ไม่จำเป็นและแก้ไขโค้ดที่ต่อไปถึงไฟล์นั้น โดยมี
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js <br>


จากนั้นแก้ไขโค้ดในส่วนของ App.js โดยลบทั้งหมดใน return แล้วใส่แค่ div tag <br>


# Commit 2 : Create Board,Square and Game Components

สร้าง File ชื่อ Board.js, Square.js และ Game.js โดยทั้งสามไฟล์เป็น Components จากนั้นทำการเขียนในไฟล์ Board.js โดยสร้างเป็น Class Component ที่มีชื่อ Board โดยมี Function ชื่อ renderSquare โดยรับ parameter i แล้วทำการ return เป็น Square Component ส่งค่า i เป็น props เป็น value ฉะนั้น Board ทำหน้าที่ส่งสร้าง Square ตามจำนวน i จากนั้น Function render ทำการ return โดยเรียกใช้ renderSquare โดยส่งเลขเป็นเลขตำแหน่งปุ่ม 0-8 ส่วนใน File Square.js เป็น Class Component เหมือนกันโดยมี Function render ทำหน้าที่ return ปุ่มที่มี className เป็น square โดยเเสดงผลข้อความตามค่า value ที่รับมาผ่าน props ส่วน Game.js เรียกใช้ Board สุดท้ายใน App.js ทำการเรียกใช้ Game อีกทีหนึ่ง


# Commit 3 : Edit index.css for beautiful UI

เปลี่ยน Code ใน index.css ให้เป็นไปตามใน Tutorial เพื่อเปลี่ยนรูปแบบแต่ละ Component ให้สวยงามขึ้น


# Commit 4 : Add Constructor and EventListener in Square Component

สร้าง EventListener โดยให้รับเป็น Event การกดคลิกเมาส์ ซึ่งเป็น HTML Attribute ของ Button ก็คือ onClick โดยให้เป็น Function ที่ทำการแสดงข้อความว่า click ใน console ของ Browser จากนั้นสร้าง constructor ของ Square เพื่อให้รับ props ได้ จากนั้นสร้าง state เริ่มต้น โดยให้ค่า value เป็น null

# Commit 5 : Change onClick function to setState for displaying X

เปลี่ยนจาก function onClick จากที่แสดงบน console log เป็นการเปลี่ยน state ของ Square ให้มีค่า value เป็น X แล้วเปลี่ยนข้อความบนปุ่มเป็นค่า state.value นั้น ดังนั้นเวลาที่เรากดปุ่ม จะแสดงค่า X บนช่อง

# Commit 6 : Move stored game state from Square to Board and create handleClick function in Board

ลบ constructor ของ Square แล้วไปสร้าง constructor สำหรับเก็บ state ของตัวเกม XO ไว้ใน Board แทนเพื่อที่จะสามารถเก็บข้อมูลของทั้งตารางได้ เเละ สร้าง handleClick function เพื่อรับค่า index ของช่องที่ถูกกดและเปลี่ยนค่าของช่องนั้นให้เป็น X แล้วเก็บค่า state ของตำแหน่งนั้นๆ

# Commit 7 : Change Square form Class component to Function component and add player changing method

เปลี่ยน Square จาก Class component ให้เป็น Function component แทน เพื่อให้ code มีความสั้นลง และเพิ่มค่าใน state คือค่า xIsNext เพื่อนำไปใช้ในการกำหนดผู้เล่นคนต่อไป ซึ่งจะไปกำหนดว่าจะเป็นตาของผู้เล่น X หรือ O ในตัวของ handleClick และใน handleClick มีการเพิ่มให้สามารถแสดงผลเป็น X หรือ O ได้ จากเดิมที่ได้แค่ตัว X และมีการ setState เพื่อบันทึกตาราง และเปลี่ยนค่า xIsNext ให้เป็นค่าตรงข้ามกับค่าปัจจุบัน และได้ทำการสร้างการแสดงข้อความ "Next player: " เพื่อให้ผู้เล่นทราบว่าเป็นตาของ X หรือ O 

# Commit 8 : Add calculateWinner and use it in handleClick

สร้าง function calculateWinner ที่รับ argument มาเป็น array ของทั้งตาราง แล้วนำค่านั้นมาเช็ค pattern ว่าชนะหรือไม่ แล้วใครเป็นผู้ชนะ โดยจะ return เป็น X หรือ O ถ้าชนะ แต่ถ้าไม่ก็จะ return null โดยจะใช้ใน function handleClick อีกทีโดยจะเช็คว่าใครชนะหรือเสมอในที่นี้เสมอคือ calculateWinner return null แต่ square[i] จะมีค่านั่นคือใส่ครบทั้งตาราง ถ้าเกิดชนะหรือเสมอแล้วก็ถือว่าจบเกม กดวางตัว X O ต่อไม่ได้ 

# Commit 9 : Move handleClick, calculateWinner to Game and delete constructor of Board

ทำการลบ constructor ที่ Board และทำการสร้าง constructor ที่ Game และย้าย handleClick และ calculateWinner จาก Board ไปที่ Game และในส่วนของ render ของ Board เหลือแค่การเเสดงผลของ board เท่านั้น จากนั้นในส่วนของ render Game ทำการเก็บค่า history ในรูปแบบ array 2 มิติ โดยมีหน้าที่เก็บค่า array ของทั้งตารางในเเต่ละรอบ จากนั้นมีการเก็บค่า current ซึ่งมีไว้เก็บค่าตาราง ณ ตำแหน่งนั้นๆของตาราง และมีการเก็บค่า winner ซึ่งมีไว้เก็บค่า X O หรือ null เพื่อไว้เช็คเงื่อนไข ต่อมาสร้างตัวเเปร status ขึ้นมาเพื่อเก็บข้อความไว้เเสดงผลว่าใครชนะ หรือ ว่าตานั้นเป็นของใคร

# Commit 10 : Add jumpTo function to change board history

ทำการเพิ่มปุ่มประวัติการเล่น โดยการวนค่าใน history เพื่อใช้สร้างปุ่มที่สามารถกดเพื่อเปลี่ยนตารางให้เป็นแบบที่เก็บไว้ในประวัติได้ โดยที่ทำการเรียกใช้ function jumpTo ด้วยการส่ง step ไป และมีการเพิ่ม stepNumber ไว้ใน state เพื่อเก็บค่าของรอบของการเล่น และในส่วนของ function jumpTo ที่เพิ่มเข้ามานั้นจะไปทำการเปลี่ยนค่า stepNumber ให้เท่ากับ step ที่เราเลือกและเปลี่ยนค่า xIsNext ให้ตรงตามอักษรของผู้เล่นในตานั้นๆ และสุดท้ายจะมีการเพิ่มการทำงานในส่วนของการลบประวัติซึงทำด้วยการ slice array ของ history ให้เหลือแค่ index แรกจนถึงที่เรากด# XO_table_n_n
