# -*- coding: utf-8 -*-
import oss2

def oss_func(fileobj, filepath):
    # 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录 https://ram.console.aliyun.com 创建RAM账号。
    auth = oss2.Auth('LTAI*****w8z******', 'VcnOe9bcyD8W***1TIvKf****')
    # Endpoint以杭州为例，其它Region请按实际情况填写。
    bucket = oss2.Bucket(auth, 'http://oss-cn-beijing.aliyuncs.com/', 'ji***gweb')
    return bucket.put_object(filepath, fileobj)
